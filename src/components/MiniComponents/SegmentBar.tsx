import "./MiniComponents.css";

interface Props {
  rating?: number;
}


const SegmentBar = ({ rating }: Props) => {
  return (
    <div className="segment-bar">
      <div style={{height : rating + "%"}}className="fill" id="fill"></div>
      <p className="message">BUSSINMETER</p>
      <div id="segment-1" className="segment"></div>
      <div id="segment-2" className="segment"></div>
      <div id="segment-3" className="segment"></div>
      <div id="segment-4" className="segment"></div>
      <div id="segment-5" className="segment"></div>
    </div>
  );
};

export default SegmentBar;
