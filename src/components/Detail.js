import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { addFav } from '../features/cart/favSlice';
import db from "../firebase";

const Detail = (props) => {
    const { id } = useParams();
    const [detailData, setDetaildata] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        db.collection('movies').doc(id).get().then((doc) => {
                if(doc.exists){
                    setDetaildata(doc.data());
                }
                else{
                    console.log('no such document in firebase exist ');
                }
            }).catch((error) => {
                console.log("error getting document:", error);
            });
    }, [id]);

    const handleAddToFav = (id) => {
        //console.log(id);
        dispatch(addFav(id));
    };

    return (
        <Container>
            <Background>
                <img alt = {detailData.title} src = {detailData.backgroundImg} />
            </Background>
            <ImageTitle>
                <img alt = {detailData.title} src = {detailData.titleImg} />
            </ImageTitle>
            <ContentMeta>
                <Controls> 
                    <Player>
                        <img src = "/images/play-icon-black.png" alt = "" />
                        <span> Play </span>
                    </Player>
                    <Trailor>
                        <img src = "/images/play-icon-white.png" alt = "" />
                        <span> Trailer </span>
                    </Trailor>
                    <AddList onClick = {() => handleAddToFav(id)} >
                        <span />
                        <span />
                    </AddList>
                </Controls>
                <SubTitle>{detailData.subTitle}</SubTitle>
                <Description>{detailData.description}</Description>
            </ContentMeta>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw+5px); 
`

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;

        @media(max-width: 768px){
            width: initial;
        }
    }
`

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom:  24px;
    width: 100%;
    padding-left: 50px;

    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

const ContentMeta = styled.div`
    max-width: 875px;
`

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 30px;
    padding: 0px 40px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb (249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);
    padding-left: 20px;

    img {
        width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img {
            width: 25px;
        }
    }
`

const Trailor = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddList = styled.button`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;

        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }

    &:hover{
        border: rgb(150, 150, 150);
    }
` 

export default Detail;