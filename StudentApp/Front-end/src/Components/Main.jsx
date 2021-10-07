import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Main = () => {
    const [page, setPage] = useState(1);
    const prev = page;
    const [getData, setGetData] = useState([]);
    const [data, setData] = useState({
        name: '',
        age: '',
        gender: '',
        city: '',
    });

    const handleChange = (e) => {
        const payload = {
            ...data,
            [e.target.name]: e.target.value,
        };
        setData(payload);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Data Posted');
        axios
            .post('http://localhost:2345/students', data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        // console.log(data);
    };

    // const useEffect =
    //     (() => {
    //         handleGetData();
    //     },
    //     [page]);

    const handleGetData = (value) => {
        if (value === 'decrement') {
            setPage(prev - 1);
        }

        if (value === 'increment') {
            setPage(prev + 1);
        }
        axios
            .get(`http://localhost:2345/students?page=${page}`)
            .then((res) => {
                // console.log(page);
                setGetData(res.data.students);
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(getData);
    };

    const handleMale = () => {
        axios.get('http://localhost:2345/students').then((res) => {
            const male = res.data.students.filter((item) => {
                return item.gender === 'Male';
            });
            setGetData(male);
        });
    };

    const handleFemale = () => {
        axios.get('http://localhost:2345/students').then((res) => {
            const female = res.data.students.filter((item) => {
                return item.gender === 'Female';
            });
            setGetData(female);
        });
    };
    const handleGreaterAge = () => {
        axios.get('http://localhost:2345/students').then((res) => {
            const greater = res.data.students.filter((item) => {
                return item.age > 18;
            });
            setGetData(greater);
        });
    };
    const handleLessAge = () => {
        axios.get('http://localhost:2345/students').then((res) => {
            const lesser = res.data.students.filter((item) => {
                return item.age <= 18;
            });
            setGetData(lesser);
        });
    };
    const sortAscending = () => {
        axios.get('http://localhost:2345/students/ascending/1').then((res) => {
            setGetData(res);
        });
    };
    const sortDecending = () => {
        axios.get('http://localhost:2345/students/decending').then((res) => {
            setGetData(res);
        });
    };

    console.log(getData);
    return (
        <div>
            <div className={styles.main}>
                <br />
                <div className={styles.top}>
                    <div className={styles.left}>
                        <div>
                            <label style={{ textAlign: 'left' }}>NAME :</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                            />

                            <label style={{ textAlign: 'left' }}>AGE :</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="age"
                                placeholder="Enter Age"
                            />

                            <label style={{ textAlign: 'left' }}>
                                GENDER :
                            </label>
                            <select
                                onChange={handleChange}
                                name="gender"
                                className={styles.gender}
                            >
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>

                            <label>CITY :</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="city"
                                placeholder="Enter City"
                            />
                            <button
                                type="submit"
                                style={{ cursor: 'pointer', fontWeight: 600 }}
                                onClick={handleSubmit}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <h2>Sorting according to gender</h2>
                        <button
                            onClick={handleMale}
                            style={{
                                width: '100',
                                height: '30px',
                                borderRadius: '10px',
                            }}
                        >
                            Male
                        </button>
                        <button
                            onClick={handleFemale}
                            style={{
                                width: '100',
                                height: '30px',
                                borderRadius: '10px',
                            }}
                        >
                            Female
                        </button>

                        <h2>Sorting according to Age</h2>
                        <button
                            onClick={handleGreaterAge}
                            style={{
                                width: '100',
                                height: '30px',
                                borderRadius: '10px',
                            }}
                        >
                            Age greater than 18
                        </button>
                        <button
                            onClick={handleLessAge}
                            style={{
                                width: '100',
                                height: '30px',
                                borderRadius: '10px',
                            }}
                        >
                            Age less than or equal to 18
                        </button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <button
                        className={styles.btn}
                        style={{ cursor: 'pointer', fontWeight: 500 }}
                        onClick={handleGetData}
                    >
                        Show Students Data
                    </button>
                    <button onClick={sortAscending}>SORT Ascending</button>
                    <button onClick={sortDecending}>SORT Decending</button>
                    <br />
                    {getData.map((el) => (
                        <div key={uuidv4()} className={styles.data}>
                            <p>Name: {el.name}</p>
                            <p>Age: {el.age}</p>
                            <p>Gender: {el.gender}</p>
                            <p>City: {el.city}</p>
                        </div>
                    ))}
                    <button onClick={() => handleGetData('decrement')}>
                        Prev
                    </button>
                    <span>{page}</span>
                    <button onClick={() => handleGetData('increment')}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;
