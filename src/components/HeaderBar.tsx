import "bootstrap/dist/css/bootstrap.css";
import "./HeaderBar.css";

interface Props {
  header: string;
  sub?: string;
  backgroundColor?: string;
}

const HeaderBar = ({ header, sub, backgroundColor = "light" }: Props) => {
  return (
    <div className={"bar bg-" + backgroundColor}>
      <h2 className="heading">{header}</h2>
      <p className="sub">{sub}</p>
    </div>
  );
};

export default HeaderBar;
