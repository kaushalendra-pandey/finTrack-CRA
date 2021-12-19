import React from 'react'
import styled from "styled-components"
import PropTypes from "prop-types"

const ImageDiv = styled.div`

    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }

`

const ProfileImage = ({imgSrc}) => {
    return (
        <ImageDiv>
            <img src={imgSrc} alt="profile" />
        </ImageDiv>
    )
}

ProfileImage.defaultProps = {
    imgSrc: "https://res.cloudinary.com/test-cloud-by-kaush/image/upload/v1616668958/samples/people/kitchen-bar.jpg"
}

ProfileImage.propTypes = {
    imgSrc: PropTypes.string.isRequired
}

export default ProfileImage
