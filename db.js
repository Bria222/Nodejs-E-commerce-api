const uri =
  'mongodb+srv://brian:brian@cluster0.5e0cb3c.mongodb.net/?retryWrites=true&w=majority'
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch((err) => console.log(err))
