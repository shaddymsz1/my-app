import React, {Fragment} from "react"

const SectionList = () => {
    return (
        <Fragment>

            <div className="row card mt50 mb50 ptb50">
                <div className="col-md-12 text-center">
                    <h2 className="health-heading mt100">
                        All Section List
                    </h2>
                    <p>
                        you will get all info related to lms
                    </p>

                    <table className="table">
                        <tr>
                            <th>S.No.</th>
                            <th>Section Name</th>
                            <th>No. of Videos</th>
                            <th>No. of Questions</th>
                        </tr>

                        <tr>
                            <td>1.</td>
                            <td>First Video Section</td>
                            <td>25</td>
                            <td>58</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>First Video Section</td>
                            <td>25</td>
                            <td>58</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>First Video Section</td>
                            <td>25</td>
                            <td>58</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>First Video Section</td>
                            <td>25</td>
                            <td>58</td>
                        </tr>

                    </table>

                </div>


            </div>

        </Fragment>
    )
}

export default SectionList