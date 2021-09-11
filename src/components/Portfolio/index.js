import React , {useState , useEffect} from "react";
import {PortfolioSection , PortfolioTitle , TitleSpan , PortfolioList , PortfolioItem , Box , BoxImg , Overlay , OverlaySpan} from './style.js'
import axios from "axios";

const Portfolio = () => {

    const [ images, setImages ] = useState([]);
    useEffect( () => {
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})

    },[] )
    const PortfolioImages = images.map((imageItem) => {
        return(
        <Box key={imageItem.id}>
            <BoxImg src={imageItem.image} alt=""/>
                <Overlay>
                    <OverlaySpan>
                       Span Image
                    </OverlaySpan>
                </Overlay>
        </Box>                                

        )
    })
    return(
        <PortfolioSection>
            <PortfolioTitle><TitleSpan>My</TitleSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                {PortfolioImages} 

            </div>
            
        </PortfolioSection>
    )
}
export default Portfolio;