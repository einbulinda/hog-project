import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import debounce from "@mui/utils/debounce";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import React, { useCallback, useEffect, useRef, useState } from "react";
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined";
import HogMenu from "./styled-components/HogMenu";
import { styled } from "@mui/material/styles";
import FlexBox from "./styled-components/FlexBox";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import { useSelector } from "react-redux";
import { CustomLink } from "./styled-components/CustomLink";
import { getAllCategories } from "redux/actions/categoriesActions";
import { useDispatch } from "react-redux";

const mapState = ({ categoriesData, productsData }) => ({
  categories: categoriesData.categories,
  products: productsData.products,
});

const SearchOutlinedIcon = styled(SearchOutlined)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 6,
}));

const SearchResultCard = styled(Card)(() => ({
  position: "absolute",
  top: "100%",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  width: "100%",
  zIndex: 99,
}));

const DropDownHandler = styled(FlexBox)(({ theme }) => ({
  borderTopRightRadius: 300,
  borderBottomRightRadius: 300,
  whiteSpace: "pre",
  borderLeft: `1px solid ${theme.palette.text.disabled}`,
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
}));

const SearchBox = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(mapState);
  const [category, setCategory] = useState("");
  const [resultList, setResultList] = useState([]);
  const parentRef = useRef();

  // On Loading Component
  useEffect(() => {
    dispatch(getAllCategories());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryDropdown = (
    <HogMenu
      direction="left"
      handler={
        <DropDownHandler
          sx={{
            alignItems: "center",
            bgcolor: "grey.100",
            height: "100%",
            px: 3,
            color: "grey.700",
          }}
          component={TouchRipple}
        >
          <Box mr={0.5}>{category}</Box>
          <KeyboardArrowDownOutlined fontSize="small" color="inherit" />
        </DropDownHandler>
      }
    >
      {categories.map((item) => (
        <MenuItem key={item}>{item}</MenuItem>
      ))}
    </HogMenu>
  );

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{ ref: parentRef }}
    >
      <TextField
        variant="outlined"
        placeholder="Searching for..."
        fullWidth
        // onChange={handleSearch}
        InputProps={{
          sx: {
            height: 44,
            borderRadius: 300,
            paddingRight: 0,
            color: "grey.700",
            overflow: "hidden",
          },
          endAdornment: categoryDropdown,
          startAdornment: <SearchOutlinedIcon fontSize="small" />,
        }}
      >
        {!!resultList.length && (
          <SearchResultCard elevation={2}>
            {resultList.map((item) => (
              <CustomLink to={`/product/search/${item}`} key={item}>
                <MenuItem key={item}>{item}</MenuItem>
              </CustomLink>
            ))}
          </SearchResultCard>
        )}
      </TextField>
    </Box>
  );
};

export default SearchBox;
