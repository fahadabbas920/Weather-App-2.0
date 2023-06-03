import ReactLoading from 'react-loading';

const Loading = () => {
    return ( 
        <div className="App-Loading-Container">
            {/* <ReactLoading type={'spin'} color={"black"} height={667} width={375} /> */}
            <ReactLoading type={'spin'} color={"black"} height={150} width={150} />
            <div className="App-Loading-Container-Text">Loading...</div>
        </div>
     );
}
 
export default Loading;