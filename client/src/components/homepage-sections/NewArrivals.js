import { Grid } from "@mui/material";
import NewArrivalIcon from "components/icons/NewArrivalIcon";
import ProductCard4 from "components/product-cards/ProductCard4";
import SectionCreator from "components/templates/SectionCreator";
import GlamourCard from "components/styled-components/GlamourCard";
import { useSelector } from "react-redux";

const mapState = ({ productsData }) => ({ products: productsData.products });

const NewArrivals = () => {
  const { products } = useSelector(mapState);
  const toDisplay = 6;

  return (
    <SectionCreator
      icon={<NewArrivalIcon />}
      title="New Arrivals"
      seeMoreLink="#"
    >
      <GlamourCard sx={{ p: "1rem" }}>
        <Grid container spacing={3}>
          {products.slice(0, toDisplay).map((item) => (
            <Grid item lg={2} md={4} sm={4} xs={6} key={item._id}>
              <ProductCard4
                id={item._id}
                imgUrl={item.image[0]}
                title={item.name}
                rating={4.5}
                price={item.price}
              />
            </Grid>
          ))}
        </Grid>
      </GlamourCard>
    </SectionCreator>
  );
};

export default NewArrivals;
