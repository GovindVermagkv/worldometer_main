import React from 'react'

export default function Govind() {
  return (
    <div className="container">
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="card-photo">
                        <img src="https://avatars.githubusercontent.com/u/100123540?v=4" alt="" />
                    </div>
                </div>
                <div className="card-body">
                    <h3 className="card-name">Govind Verma</h3>
                    <p className="card-description">front-end developer</p>
                    <div className="card-button">
                        <button className="btn btn-primary"><a href='https://github.com/GovindVermagkv'>Github</a></button>
                        <button className="btn btn-outline-primary"><a href="https://www.linkedin.com/in/govind-verma-b210bb19b/">LinkedIn</a></button>
                    </div>
                    <ul className="card-social">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
