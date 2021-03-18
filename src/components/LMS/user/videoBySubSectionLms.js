import React, {Fragment} from "react";
import Breadcrumb from "../../common/breadcrumb";
import Vimeo from '@u-wave/react-vimeo';

const videoBySubSectionLms = () => {


    return (
        <Fragment>

            <Breadcrumb parent="section1" title="Play Quiz"/>
            <div className="container-fluid">


                <div className="col-md-6 offset-md-3 justify-content-center mb-5">
                    <Vimeo
                        video="115783408"
                        autoplay
                    />
                </div>

                <div className="col-md-5 offset-md-3">
                    <button className="btn-block btn btn-primary justify-content-center pt-2 pb-2 m-t-45 text-center">
                        Play Quiz
                    </button>
                </div>

            </div>

        </Fragment>
    )
}

export default videoBySubSectionLms