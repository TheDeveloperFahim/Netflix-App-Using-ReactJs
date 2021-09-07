import Card from "./Card";
import { Cdata } from "./Cdata";

export const App = () => {
  return (
    <>
      <h1 className="heading">List of top 5 netflix series in 2021</h1>
      {Cdata.map((val) => {
        return (
          <Card
            imgSrc={val.imgSrc}
            cetagory={val.cetagory}
            title={val.title}
            link={val.link}
          />
        );
      })}
    </>
  );
};
