import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";
import "../app-header/app-header.css";
import "../post-add-form/post-add-form.css";
import "../post-list/post-list.css";
import "../post-list-item/post-list-item.css";
import "../post-status-filter/post-status-filter.css";
import "../search-panel/search-panel.css";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-pannel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
};

export default App;
