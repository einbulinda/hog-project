import { styled } from "@mui/styles";
import Box from "@mui/system/Box";
import CategoryMenuItem from "components/categories/CategoryMenuItem";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const mapState = ({ categoriesData }) => ({
  categories: categoriesData.categories,
});

const Wrapper = styled(Box)(({ theme, position, open }) => ({
  position: position || "unset",
  padding: "0.5rem 0px",
  left: 0,
  right: "auto",
  top: position === "absolute" ? "calc(100% + 0.7rem)" : "0.5rem",
  borderRadius: 4,
  transform: open ? "scaleY(1)" : "scaleY(0)",
  transformOrigin: "top",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  transition: "all 250ms ease-in-out",
  zIndex: 98,
}));

const CategoryMenuCard = ({ open, position }) => {
  const { categories } = useSelector(mapState);

  const generateSlug = (str) => {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes

    return str;
  };

  return (
    <Wrapper open={open} position={position}>
      {categories &&
        categories.map((item) => {
          return (
            <CategoryMenuItem
              title={item.name}
              key={item.name}
              slug={() => generateSlug(item.name)}
            >
              <Typography variant="subtitle1">{item.title}</Typography>
            </CategoryMenuItem>
          );
        })}
    </Wrapper>
  );
};

export default CategoryMenuCard;
