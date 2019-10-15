import React from 'react';

const CampusesList = (props) => {
    console.log("p", props)
    return (
        <tbody>
        {
            props.campuses 
            .map(campus =>
                (
                    <tr key={campus.id}>
                        <td>
                            {campus.name}
                        </td>
                        <td onClick= {() => props.selectCampus(campus)}>
                            Description
                        </td>
                    </tr>
                )
            )
        }
        </tbody>
    )
}

export default CampusesList;