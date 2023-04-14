import useFetch from "../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {data,loading,error} = useFetch("/hotels/countByCity?cities=london,Vienna,dublin")
  
  console.log(data)
  return (
    <div className="featured">
      {loading ? ("Loading Please Wait") : (<><div className="featuredItem">
        <img
          src="https://i2-prod.mirror.co.uk/incoming/article28871026.ece/ALTERNATES/s1200c/0_London-at-sunset.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://media.architecturaldigest.com/photos/561d6d06ed5c90fd5d6127ee/16:9/w_2640,h_1485,c_limit/Vienna%20Travel.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Vienna</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.timeout.com/images/105286188/750/422/image.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div> </>)}
    </div>
  );
};

export default Featured;
