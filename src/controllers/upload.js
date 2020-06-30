const upload = require("../middleware/upload");

const uploadFile = async (req, res) => {
  try {
    await upload(req, res);

    console.log(req.file);
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    return res.send(`File has been uploaded.`);
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload image: ${error}`);
  }
};


const uploadFiles = async (req, res) => {
  try{
    await upload(req, res);
    console.log(req.files);

    if(req.length <= 0){
      return res.send('you must select at least 1 file');
    }
    return res.send('Files uploaded successfully');
  }
  catch(error){
    console.log(error);

    if(error.code === "LIMIT_UNEXPECTED_FILE"){
      return res.send("Too many files to upload");
    }
    return res.send(`Error when trying to upload many files: ${error}`);
  }
}

module.exports = {
  uploadFiles: uploadFiles
};