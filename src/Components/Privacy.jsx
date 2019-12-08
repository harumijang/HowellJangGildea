import React from "react";
import Profile from './Profile'
import {Link} from "react-router-dom"


const Privacy = () => {
    return (
        <div class="priv">
        <div class="d-flex justify-content-center"><h1>Privacy Policy</h1></div>
      <h2>Information You Provide</h2>
        <h5>Any information that you provide to us will be saved for future use. This includes all usernames and passwords as well as any reviews and games that anyone posts. This data is essential for the operation of GamerGoon.</h5>
        <h5>GamerGoon is a public application designed for the public sharing of information and opinions about video games. With this in mind, all reviews posted by the public and all games posted by developers will be available for public viewing. While you can delete any games and reviews that are posted, while they are active on the site, anyone can view them.</h5>
      <h2>Information We Collect</h2>
      <h5>In addition to the information that you have provided, GamerGoon will also be collecting certain analytics data in order to refine the product and provide the best user experience. This includes IP address, web traffic, and usage data. We collect all of this data in the interest of improving GamerGoon and are not and will never sell this data to third parties.</h5>
        <h2>Personalized Advertising</h2>
      <h5>In order to remain operational, GamerGoon needs to bring in income to sustain itself. In the interest of keeping our platform accessible and free to all users we will be utilizing certain empty space on game pages to show personalized advertising based on your browsing habits through a third party provider. Keep in mind that these partners may have different standards of data collection and may be collecting data that we aren’t and using it for different purposes. </h5>
      </div>
    )
}
export default Privacy

