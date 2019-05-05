function ArrivalsLots() {
  const RequisiteA = ProductsArrivals.map(requis => (
    <Lot key={requis.id} product={requis} />
  ));
  return <div className="array-lots">{RequisiteA}</div>;
}

function ShowcaseLots() {
  const RequisiteS = ProductsShowcase.map(requis => (
    <Lot key={requis.id} product={requis} />
  ));
  return <div className="array-lots">{RequisiteS}</div>;
}

function Lot(props) {
  return (
    <div className="lot-card">
      <img
        className="lot-pic"
        src={props.product.pic}
        alt={props.product.alter}
      />
      <p>
        {props.product.description}
        <br />
        <font className="price">
          {props.product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}
        </font>
      </p>
      <div className="btn-arr">
        <a href="#">Add to Cart</a>
      </div>
    </div>
  );
}

const ProductsArrivals = [
  {
    id: "1",
    pic: "media/bugs-1.png",
    alter: "bugs-1",
    price: 23.2,
    description: "Black Genuine Leather Bags"
  },
  {
    id: "2",
    pic: "media/bugs-2.png",
    alter: "bugs-2",
    price: 20.16,
    description: "Fashion Red Leather Bags"
  },
  {
    id: "3",
    pic: "media/bugs-3.png",
    alter: "bugs-3",
    price: 30.14,
    description: "Fashion Genuine Leather Bags"
  },
  {
    id: "4",
    pic: "media/bugs-4.png",
    alter: "bugs-4",
    price: 15.2,
    description: "Simply Leather Bags"
  },
  {
    id: "5",
    pic: "media/bugs-5.png",
    alter: "bugs-5",
    price: 25.2,
    description: "New Fashion Leather Bags"
  },
  {
    id: "6",
    pic: "media/bugs-6.png",
    alter: "bugs-6",
    price: 17.6,
    description: "Single Hand Models Bags"
  }
];

const ProductsShowcase = [
  {
    id: "7",
    pic: "media/watch-1.png",
    alter: "watch-1",
    price: 25.36,
    description: "Fashion Genuine Chain Watch"
  },
  {
    id: "8",
    pic: "media/watch-2.png",
    alter: "watch-2",
    price: 35.24,
    description: "Fashion Silver Chain Watch"
  },
  {
    id: "9",
    pic: "media/watch-3.png",
    alter: "watch-3",
    price: 23.12,
    description: "Fashion Chain Watch"
  },
  {
    id: "10",
    pic: "media/watch-4.png",
    alter: "watch-4",
    price: 42.32,
    description: "Fashion Black Chain Watch"
  },
  {
    id: "11",
    pic: "media/watch-5.png",
    alter: "watch-5",
    price: 15.2,
    description: "Fashion Lether  Watch"
  },
  {
    id: "12",
    pic: "media/watch-6.png",
    alter: "watch-6",
    price: 36.12,
    description: "Fashion Forign Watch"
  }
];

ReactDOM.render(<ArrivalsLots />, document.getElementById("arrivals-lots"));
ReactDOM.render(<ShowcaseLots />, document.getElementById("watch-lots"));
ReactDOM.render(<ArrivalsLots />, document.getElementById("fashion-lots"));
