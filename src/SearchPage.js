import React from 'react'
import  TuneOutlined  from "@mui/icons-material/TuneOutlined"
import "./SearchPage.css"

import ChannelRow from "./ChannelRow"

function SearchPage() {
  return (
    <div className="searchPage">

        <div className="searchpagefilter">
        <TuneOutlined  />
        <h2>FILTER</h2>
        </div>
        <hr />

        <ChannelRow
        image="logo192.png"
        channel="Clever Programmer"
        verified
        subs="660k"
        noofvideoes="{382}"
        description="You can find awesome programmer" 
        />
    </div>
  )
}

export default SearchPage