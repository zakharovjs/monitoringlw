import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import {useObject} from "react-firebase-hooks/database";
import {ref} from "firebase/database";
import {db} from "../../firebase";


const Widget = ({ type }) => {
  let data;
  const [levelwater001] = useObject(ref(db, 'id/001/levelwater'));
  const [levelcrit001] = useObject(ref(db, 'id/001/levelcrit'));
  const [lat001] = useObject(ref(db, 'id/001/lat'));
  const [lon001] = useObject(ref(db, 'id/001/lng'));
  const [title001] = useObject(ref(db, 'id/001/title'));


  const [levelwater002] = useObject(ref(db, 'id/002/levelwater'));
  const [levelcrit002] = useObject(ref(db, 'id/002/levelcrit'));
  const [lat002] = useObject(ref(db, 'id/002/lat'));
  const [lon002] = useObject(ref(db, 'id/002/lng'));
  const [title002] = useObject(ref(db, 'id/002/title'));

  const [levelwater003] = useObject(ref(db, 'id/003/levelwater'));
  const [levelcrit003] = useObject(ref(db, 'id/003/levelcrit'));
  const [lat003] = useObject(ref(db, 'id/003/lat'));
  const [lon003] = useObject(ref(db, 'id/003/lng'));
  const [title003] = useObject(ref(db, 'id/003/title'));

  const [levelwater004] = useObject(ref(db, 'id/004/levelwater'));
  const [levelcrit004] = useObject(ref(db, 'id/004/levelcrit'));
  const [lat004] = useObject(ref(db, 'id/004/lat'));
  const [lon004] = useObject(ref(db, 'id/004/lng'));
  const [title004] = useObject(ref(db, 'id/004/title'));

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
