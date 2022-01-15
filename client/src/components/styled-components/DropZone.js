import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Dropzone from "react-dropzone";

const DropZone = (props) => {
  return (
    <Dropzone
      accept=".jpeg, .jpg, .png"
      multiple={false}
      maxFiles={1}
      {...props}
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="200px"
          border="1px dashed"
          borderColor="grey.400"
          borderRadius="10px"
          bgcolor={isDragActive ? "grey.200" : "none"}
          sx={{
            transition: "all 250ms ease-in-out",
            outline: "none",
          }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <Typography variant="h6" mb={2} color="grey.600">
            Drag & drop product image here.
          </Typography>

          <Divider sx={{ width: "200px", mx: "auto" }} />

          <Typography
            color="grey.600"
            bgcolor={isDragActive ? "grey.200" : "background.paper"}
            lineHeight="1"
            px={2}
            mt={-1.25}
            mb={2}
          >
            or
          </Typography>

          <Button
            type="button"
            sx={{
              bgcolor: "error.light",
              px: "2rem",
              mb: "22px",
            }}
          >
            Select Image
          </Button>
          <Typography variant="body2" color="grey.600">
            Upload 280*280 image
          </Typography>
        </Box>
      )}
    </Dropzone>
  );
};

export default DropZone;
