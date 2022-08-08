import styled from 'styled-components';

export default function Navbar({ profileURL }) {
    return (
        <Wrapper>
            <div>TrackIt</div>
            <img src={profileURL} alt="avatar" />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;

    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }

    div{
        font-family: 'Playball', sans-serif;
        font-size: 39px;
        line-height: 49px;
    }
`;
