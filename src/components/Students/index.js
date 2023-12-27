import React, { Component } from 'react';
import './index.css';
import female from './female.png';
import male from './male.png';
import stdimg from './student.jpeg';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProgram: "default",
            selectedBranch: "default",
            selectedYear: "default"
        };
    }

    handleProgramChange = (event) => {
        this.setState({
            selectedProgram: event.target.value,
            selectedBranch: "default",
            selectedYear: "default"
        });
    }

    handleBranchChange = (event) => {
        this.setState({ selectedBranch: event.target.value });
    }

    handleYearChange = (event) => {
        this.setState({ selectedYear: event.target.value });
    }

    render() {
        return (
            <>
                <div className='std-main-container'>
                    <div className='std-count'>
                        <div className='std-type'>
                            <p className='std-type-txt'>Total Students</p>
                            <div className='std-number'>
                                <img src={stdimg} alt='stdimg' className='std-img'/>
                                <p id='totalStudents'>20</p>
                            </div>
                        </div>
                        <div className='std-type'>
                            <p className='std-type-txt'>Male</p>
                            <div className='std-number'>
                                <img src={male} alt='male' className='std-img'/>
                                <p id='maleStudents'>2</p>
                            </div>
                        </div>
                        <div className='std-type'>
                            <p className='std-type-txt'>Female</p>
                            <div className='std-number'>
                                <img src={female} alt='female' className='std-img'/>
                                <p id='femaleStudents'>18</p>
                            </div>
                        </div>
                    </div>
                    <div className='std-drop-container'>
                        <label className='drop-label'>Program</label>
                        <select 
                            className='std-drop-menu' 
                            value={this.state.selectedProgram}
                            onChange={this.handleProgramChange}
                        >
                            <option value="default">-Select Program-</option>
                            <option value="option1">B.Tech</option>
                            <option value="option2">M.Tech</option>
                            <option value="option3">Pharmacy</option>
                            <option value="option4">MBA</option>
                            <option value="option5">BBA</option>
                            <option value="option6">PhD</option>
                            <option value="option7">MBBS</option>
                            <option value="option8">BSc Agriculture</option>
                        </select>
                        <label className='drop-label'>Branch</label>
                        <select 
                            className='std-drop-menu' 
                            value={this.state.selectedBranch}
                            onChange={this.handleBranchChange}
                        >
                            <option value="default">-Select Branch-</option>
                            {/* Add branch options here */}
                        </select>
                        <label className='drop-label'>Year</label>
                        <select 
                            className='std-drop-menu' 
                            value={this.state.selectedYear}
                            onChange={this.handleYearChange}
                        >
                            <option value="default">-Select Year-</option>
                            <option value="option1">I Year</option>
                            <option value="option2">II Year</option>
                            <option value="option3">III Year</option>
                            <option value="option4">IV Year</option>
                        </select>
                        <button type='submit' className='btn2'>Submit</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Students;