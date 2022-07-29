import React from "react";
import { useSelector } from "react-redux";
import Tag from "../components/Tag";
import "./styles.css";

const Sidebar = () => {
  const { data } = useSelector((state) => state.data);

  return (
    <div className="sidebar">
      <img src={data?.image} width="240" alt="item" />
      <h5 className="item-title">{data?.title}</h5>
      <p className="item-subtitle">{data?.subtitle}</p>
      <hr />
      {data?.tags?.map((tag, index) => (
        <Tag key={index} title={tag} />
      ))}
      <hr />
    </div>
  );
};

export default Sidebar;
