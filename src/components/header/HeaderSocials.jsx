import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/vicente-estrada-0678b8190/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/vicente100est" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/vicentcode/" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/vicentedoficial" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials