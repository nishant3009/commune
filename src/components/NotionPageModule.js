import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function NotionPageModule({ props }) {
  const [notionBody, setNotionBody] = useState({});
  const fetchPageContent = async () => {
    try {
      const res = await axios.post("http://localhost:5000/fetchPageInfo", {
        pageId: props.pageId.toString(),
      });
      console.log(res.data);
      setNotionBody(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log(props.pageId.toString());
    fetchPageContent();
  }, []);
  return (
    <div>
      <div className="w-[1000px] h-[680px] bg-[#171717] m-3 rounded-xl">
        {/* <h2>{pageContentInfo.pageInfo.title}</h2>
                <h3>{pageContentInfo.pageInfo.url}</h3> */}

        <div className="m-3 relative top-24 bg-[#171717] w-[95%] rounded-xl  h-[80%]">
          <p className="m-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
            mattis nunc sed blandit libero volutpat sed cras ornare. Massa enim
            nec dui nunc mattis enim. Lacus sed viverra tellus in. Eget lorem
            dolor sed viverra ipsum nunc aliquet bibendum. Egestas tellus rutrum
            tellus pellentesque eu tincidunt tortor aliquam nulla. Nisi vitae
            suscipit tellus mauris a diam maecenas sed enim. Quis commodo odio
            aenean sed adipiscing. Orci eu lobortis elementum nibh. Enim blandit
            volutpat maecenas volutpat blandit aliquam. Facilisis gravida neque
            convallis a cras semper auctor neque vitae. Vitae justo eget magna
            fermentum iaculis eu non. Nullam vehicula ipsum a arcu cursus. Non
            enim praesent elementum facilisis leo vel fringilla est ullamcorper.
            Donec ultrices tincidunt arcu non sodales neque sodales ut.
            Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus.
            Condimentum id venenatis a condimentum vitae sapien. Fames ac turpis
            egestas sed tempus urna et pharetra. Laoreet suspendisse interdum
            consectetur libero id faucibus nisl. Id aliquet lectus proin nibh
            nisl condimentum. At volutpat diam ut venenatis tellus in. Aliquet
            nibh praesent tristique magna sit. Sit amet mauris commodo quis
            imperdiet. Sagittis id consectetur purus ut faucibus. Vulputate ut
            pharetra sit amet. Nec nam aliquam sem et tortor consequat. Dictum
            at tempor commodo ullamcorper. Sociis natoque penatibus et magnis.
            Sed viverra tellus in hac. Faucibus nisl tincidunt eget nullam non
            nisi est sit amet. Egestas maecenas pharetra convallis posuere.
            Risus sed vulputate odio ut enim blandit. Vulputate enim nulla
            aliquet porttitor. Ipsum consequat nisl vel pretium lectus quam id
            leo in.
          </p>
        </div>
      </div>
    </div>
  );
}
export default NotionPageModule;
