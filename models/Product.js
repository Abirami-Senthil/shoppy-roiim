import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name.'],
    maxlength: [50, 'Product name cannot be more than 50 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide the product\'s price'],
  },
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
