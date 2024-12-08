import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";


function Slider({ show, onClose, component,title }) {
    return (
        <div >
            <SlidingPane isOpen={show} onRequestClose={onClose} 
            className="some-custom-class"
            overlayClassName="some-custom-overlay-class"
            title={title}>
                {component}
            </SlidingPane>
        </div>
    )
}

export default Slider;