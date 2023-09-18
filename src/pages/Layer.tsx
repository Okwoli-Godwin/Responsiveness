import React from 'react'
import styled from "styled-components"
import img1 from "../assets/slide1.jpg"
import img2 from "../assets/slid2.jpg"
import img3 from "../assets/slide3.jpg"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Layer = () => {

    const items = [
        
    ]
   
  return (
      <Container>
          <Wrapper>
              <Top>
                  <h2>APP SCREENSHOTS</h2>
                  <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Top>
              <Slidehold>
                  <AliceCarousel autoPlay autoPlayInterval={2000} infinite>
                      <Box>
                      <Hovercard>
                      </Hovercard>
                    <Img src={img1}/>
                  </Box>
                  <Box>
                    <Img src={img2}/>
                  </Box>
                  <Box>
                    <Img src={img3}/>
                  </Box>
                  <Box>
                    <Img src={img3}/>
                          </Box>
                      </AliceCarousel>
                  </Slidehold>
          </Wrapper>
    </Container>
  )
}

export default Layer
const Hovercard = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
    width: 100%;
    height: 100%;
    opacity: 0;
    &:hover{
        opacity: 1;
    }
`
const Img = styled.img`
    width: 92%;
    height: 92%;
    object-fit: cover;
`
const Box = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    background-color: gray;
    margin-right: 15px;
    overflow: hidden;
`
const Slidehold = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
    justify-content: space-between;
    overflow: hidden;
`
const Top = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    align-items: center;
    h2{
        margin: 0px;
    }
    p{
        width: 40%;
        text-align: center;
    }
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    justify-content: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`