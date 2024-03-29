const Item = require("../models/itemModel");
const ErrorHandler = require("../utils/errorhandler");
const Student = require("../models/studentModel")
const catchAsyncErrors = require("../middleware/catchAE");
const ApiFeatures = require("../utils/apiFeatures");

//Create Item --Owner Access

exports.createItem = catchAsyncErrors(async (req, res, next) => {

  const {
    name,
    description,
    price,
    category,
    type,
    availability,
    images

  } = req.body

  const item = await Item.create({
    name,
    description,
    price,
    category,
    type,
    availability,
    images,
    collegeCanteen: req.owner.ownerCollegeName,
  });

  res.status(201).json({
    success: true,
    item,
  });
});

// Get all Item

exports.getAllItems = catchAsyncErrors(async (req, res, next) => {
  
  const resultPerPage = 20;
  const itemsCount = await Item.countDocuments();

  const apiFeatures = new ApiFeatures(Item.find({availability:true, ownerCollegeName: req.param.ownerCollegeName }), req.query).search().filter();

  let items = await apiFeatures.query;

  let filteredItemsCount = items.length;

  apiFeatures.pagination(resultPerPage);

  items = await apiFeatures.query.clone();
  console.log(items);

  res.status(200).json({
    success: true,
    items,
    itemsCount,
    resultPerPage,
    filteredItemsCount,
  });
});

// Get Item Details

exports.getItemDetails = catchAsyncErrors(async (req, res, next) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    return next(new ErrorHandler("Item not Found", 404));
  }

  res.status(200).json({
    success: true,
    item,
  });
});

// Update Items  --Owner access

exports.updateItem = catchAsyncErrors(async (req, res, next) => {
  let item = Item.findById(req.params.id);

  if (!item) {
    return next(new ErrorHandler("Item not Found", 404));
  }

  item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    item,
  });
});

// Delete Item --Owner Access

exports.deleteItem = catchAsyncErrors(async (req, res, next) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    return next(new ErrorHandler("Item not Found", 404));
  }

  await item.deleteOne();

  res.status(200).json({
    success: true,
    message: "Item deleted successfully",
  });
});
