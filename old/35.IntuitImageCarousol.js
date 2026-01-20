function Carousel() {
  // const [item, setItem] = React.useState('thing');

  const [page, setPage] = React.useState(0);
  const [image, setImage] = React.useState("");
  getImages().then((img) => console.log(img[0]));

  React.useEffect(() => {
    getImages().then((img) => {
      setImage(img);
    });
  }, []);

  const handleClick2 = function () {
    if (page < image.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };
  return (
    <div>
      <img src={image[page]} onClick={handleClick2} />
    </div>
  );
}
