import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";
import { CustomLink } from "components/styled-components/CustomLink";

const HogTable = ({ items, columns, url }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ maxWidth: column.maxWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      let cellValue = null;
                      if (column.id === "status") {
                        cellValue = row[column.id] === true ? "True" : "False";
                      } else {
                        cellValue = row[column.id];
                      }
                      const value = cellValue;
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "image" ? (
                            <Avatar
                              sx={{ height: 40, width: 40 }}
                              src={Array.isArray(value) ? value[0] : value}
                              alt={column.id}
                            />
                          ) : column.id === "action" ? (
                            <Typography
                              textAlign="center"
                              color="grey.600"
                              sx={{
                                flex: "0 0 0 !important",
                                display: { xs: "none", md: "block" },
                              }}
                            >
                              <CustomLink path={`${url}${row._id}`}>
                                <IconButton>
                                  <EastIcon fontSize="small" color="inherit" />
                                </IconButton>
                              </CustomLink>
                            </Typography>
                          ) : column.format && typeof value === "number" ? (
                            <>{column.format(value)}</>
                          ) : (
                            <>{value}</>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default HogTable;
