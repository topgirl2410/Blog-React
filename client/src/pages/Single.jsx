import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/logo/edit.png'
import Delete from '../img/logo/delete.png'
import Menu from '../components/Menu'

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img post" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img user" />
                    <div className="info">
                        <span>María Pinto Sabater</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>

                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima lauda</h1>
                <p>Nunc viverra tincidunt arcu sed efficitur. Morbi dui elit, condimentum a dapibus sit amet, aliquam eu elit. Donec id consectetur diam, sit amet euismod ipsum. Suspendisse ut commodo lacus. In quis est nec lectus
                    convallis tincidunt. Aliquam mollis eget dui eu tempor. Integer sit amet mauris accumsan, euismod risus et, porta nulla. Pellentesque feugiat eu lorem a vehicula. Ut facilisis enim quis ante tristique, eget blandit
                    magna posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tincidunt gravida est blandit efficitur. Duis id purus enim. Nunc elementum dolor ipsum, a laoreet
                    lacus tempus ut.
                    Fusce pulvinar nulla sed nisl molestie, ac lobortis neque porta. Sed luctus lectus sed fermentum hendrerit.
                    Quisque finibus orci vitae erat fringilla, congue pellentesque neque egestas. Suspendisse potenti. In vulputate ipsum sit amet luctus tempus. Nullam sollicitudin nibh sed dictum eleifend. Proin luctus eu libero sed
                    <br />
                    <p>
                        Proin viverra quam auctor eros dignissim, vel posuere nibh auctor. Integer eget egestas magna, at bibendum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus pellentesque ultricies. Mauris
                        lobortis vitae sem sit amet malesuada. Ut metus felis, sagittis sit amet libero quis, imperdiet euismod nisi. Vivamus ut dictum augue.
                        Fusce ultrices varius orci. Suspendisse sed urna mi. Vivamus ullamcorper leo at lorem viverra lacinia. Integer feugiat fringilla lobortis. Maecenas neque felis, dapibus vitae ultrices at, volutpat ac est. Morbi
                        malesuada interdum sodales. Curabitur accumsan metus eleifend pharetra semper. Nullam at ultrices augue, hendrerit bibendum velit. Aliquam a tincidunt erat. Nulla maximus interdum est, aliquet consectetur mauris
                        gravida quis. Quisque sed eleifend nulla, eget porttitor diam. Mauris at vulputate tellus. Vestibulum ac vehicula libero. In aliquam odio ac arcu pretium faucibus in quis eros. Vivamus nulla purus,
                        egestas non rhoncus vel, lacinia volutpat dolor. Nulla facilisi.
                    </p>
                </p>
                <p>Nunc viverra tincidunt arcu sed efficitur. Morbi dui elit, condimentum a dapibus sit amet, aliquam eu elit. Donec id consectetur diam, sit amet euismod ipsum. Suspendisse ut commodo lacus. In quis est nec lectus
                    convallis tincidunt. Aliquam mollis eget dui eu tempor. Integer sit amet mauris accumsan, euismod risus et, porta nulla. Pellentesque feugiat eu lorem a vehicula. Ut facilisis enim quis ante tristique, eget blandit
                    magna posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tincidunt gravida est blandit efficitur. Duis id purus enim. Nunc elementum dolor ipsum, a laoreet
                    lacus tempus ut.
                    Fusce pulvinar nulla sed nisl molestie, ac lobortis neque porta. Sed luctus lectus sed fermentum hendrerit.
                    Quisque finibus orci vitae erat fringilla, congue pellentesque neque egestas. Suspendisse potenti. In vulputate ipsum sit amet luctus tempus. Nullam sollicitudin nibh sed dictum eleifend. Proin luctus eu libero sed
                    <br />
                    <p>
                        Proin viverra quam auctor eros dignissim, vel posuere nibh auctor. Integer eget egestas magna, at bibendum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus pellentesque ultricies. Mauris
                        lobortis vitae sem sit amet malesuada. Ut metus felis, sagittis sit amet libero quis, imperdiet euismod nisi. Vivamus ut dictum augue.
                        Fusce ultrices varius orci. Suspendisse sed urna mi. Vivamus ullamcorper leo at lorem viverra lacinia. Integer feugiat fringilla lobortis. Maecenas neque felis, dapibus vitae ultrices at, volutpat ac est. Morbi
                        malesuada interdum sodales. Curabitur accumsan metus eleifend pharetra semper.
                        <p> Nullam at ultrices augue, hendrerit bibendum velit. Aliquam a tincidunt erat. Nulla maximus interdum est, aliquet consectetur mauris
                            gravida quis. Quisque sed eleifend nulla, eget porttitor diam. Mauris at vulputate tellus. Vestibulum ac vehicula libero. In aliquam odio ac arcu pretium faucibus in quis eros. Vivamus nulla purus,
                            egestas non rhoncus vel, lacinia volutpat dolor. Nulla facilisi.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit placerat orci non venenatis. Etiam commodo semper pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Integer leo ex, faucibus id turpis quis, porttitor sagittis orci. Vivamus congue tellus id fermentum placerat
                        </p>
                    </p>
                </p>
            </div>
            <Menu />
        </div>
    )
}

export default Single