import React, { useId } from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box, IconButton, Stack } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import JoditEditor from "jodit-react";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { nanoid } from "nanoid";
import { Delete } from "@mui/icons-material";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function CourseUpdate() {
    const {id} = useParams();
    const navigate = useNavigate();
    const editor = useRef(null);
    const [courseName, setCourseName] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [content, setContent] = useState("");
    const [courseAge, setCourseAge] = useState("");
    const [courseFees, setCourseFees] = useState("");
    const [courseIntroFees, setCourseIntroFees] = useState("");
    const [courseDay, setCourseDay] = useState("");
    const [courseStartTime, setCourseStartTime] = useState(null);
    const [courseEndTime, setCourseEndTime] = useState(null);
    const [courseDuration, setCourseDuration] = useState("");
    const [slots, setSlots] = useState([]);
    const [submissionStatus, setSubmissionStatus] = useState("");

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Update = (event) =>{
        event.preventDefault();
        console.log(
            courseName,
            courseCode,
            content,
            courseAge,
            courseFees,
            courseIntroFees,
            slots,
            courseDuration
        );
        axios
            .put(`http://localhost:4000/updateCourse/${id}`, {
                courseName,
                courseCode,
                content,
                courseAge,
                courseFees,
                courseIntroFees,
                slots,
                courseDuration,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        setSubmissionStatus("Updated successfully!"); 
        navigate('/courselist');

    }

    useEffect(() => {
        axios
          .get(`http://localhost:4000/getCourse/${id}`)
          .then((result) => {
            console.log(result.data.courseName)
            setCourseName(result.data.courseName)
            setCourseCode(result.data.courseCode)
            setContent(result.data.content)
            setCourseAge(result.data.courseAge)
            setCourseFees(result.data.courseFees)
            setCourseIntroFees(result.data.courseIntroFees)
            setSlots(result.data.slots)
            setCourseDuration(result.data.courseDuration)
          })
          .catch((err) => console.log(err));
      }, []);

    const addSlot = () => {
        setSlots([
            ...slots,
            {
                id: nanoid(),
                cDay: courseDay,
                cStartTime: courseStartTime.format("HH:mm A"),
                cEndTime: courseEndTime.format("HH:mm A"),
            },
        ]);

        setCourseDay("");
        setCourseStartTime(null);
        setCourseEndTime(null);
        handleClose();
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(
            courseName,
            courseCode,
            content,
            courseAge,
            courseFees,
            courseIntroFees,
            slots,
            courseDuration
        );

        axios
            .post("http://localhost:4000/addcourse", {
                courseName,
                courseCode,
                content,
                courseAge,
                courseFees,
                courseIntroFees,
                slots,
                courseDuration,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        setSubmissionStatus("Course Added successfully!");
        navigate('/courselist');
    }

    return (
        <>
            <Box textAlign={"center"}>
                <Typography
                    align="center"
                    variant="h3"
                    className="fontWeight-800 fontMontserrat textSecondary"
                    sx={{ my: 6 }}
                >
                    Update Course
                </Typography>
            </Box>
            <form onSubmit={Update}>
                <Stack
                    margin={"auto"}
                    direction={"column"}
                    width={700}
                    padding={4}
                    sx={{ mb: 6 }}
                >
                    <FormControl>
                        <Stack
                            direction={"row"}
                            flexWrap={"wrap"}
                            alignItems={"center"}
                            marginBottom={3}
                        >
                            <FormLabel sx={{ flex: "1" }}>
                                Course Name
                            </FormLabel>
                            <TextField
                                type="text"
                                variant="outlined"
                                color="primary"
                                required
                                sx={{ flex: "1" }}
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                            ></TextField>
                        </Stack>

                        <Stack
                            direction={"row"}
                            flexWrap={"wrap"}
                            alignItems={"center"}
                            marginBottom={3}
                        >
                            <FormLabel sx={{ flex: "1" }}>
                                Course Code
                            </FormLabel>
                            <TextField
                                type="text"
                                variant="outlined"
                                color="primary"
                                required
                                sx={{ flex: "1" }}
                                value={courseCode}
                                onChange={(e) => setCourseCode(e.target.value)}
                            ></TextField>
                        </Stack>

                        <Stack direction={"column"} marginBottom={3} gap={1}>
                            <FormLabel sx={{ flex: "1" }}>
                                Course Details
                            </FormLabel>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                required
                                tabIndex={1} // tabIndex of textarea
                                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={(newContent) => {}}
                            />
                        </Stack>

                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            marginBottom={3}
                        >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Age
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={courseAge}
                                    label="Age"
                                    onChange={(e) =>
                                        setCourseAge(e.target.value)
                                    }
                                >
                                    <MenuItem value={"4-8"}>4-8 Years</MenuItem>
                                    <MenuItem value={"9-14"}>
                                        9-14 Years
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>

                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            marginBottom={3}
                        >
                            <FormLabel sx={{ flex: "1" }}>Fees</FormLabel>
                            <TextField
                                type="text"
                                variant="outlined"
                                color="primary"
                                required
                                sx={{ flex: "1" }}
                                value={courseFees}
                                onChange={(e) => setCourseFees(e.target.value)}
                            ></TextField>
                        </Stack>

                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            marginBottom={3}
                        >
                            <FormLabel sx={{ flex: "1" }}>
                                Introductory Fees
                            </FormLabel>
                            <TextField
                                type="text"
                                variant="outlined"
                                color="primary"
                                sx={{ flex: "1" }}
                                value={courseIntroFees}
                                onChange={(e) =>
                                    setCourseIntroFees(e.target.value)
                                }
                            ></TextField>
                        </Stack>

                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            marginBottom={3}
                        >
                            <FormLabel sx={{ flex: "1" }}>Add Slot</FormLabel>
                            <Button
                                margin={"auto"}
                                variant="outlined"
                                onClick={handleOpen}
                                className="btnSecondary"
                            >
                                Add slot
                            </Button>
                        </Stack>
                        <Box border={"1px solid darkgrey"} padding={"10px"}>
                            <Typography>Slots:</Typography>
                            {slots.length === 0 && (
                                <Typography>
                                    No slots have been created
                                </Typography>
                            )}
                            {slots.map((slot) => (
                                <Stack
                                    key={slot.id}
                                    direction={"row"}
                                    textAlign={"center"}
                                    alignItems={"center"}
                                    marginY={1}
                                    padding={2}
                                    border={"1px solid black"}
                                >
                                    <>
                                        <Box sx={{ flex: "1" }}>
                                            {slot.cDay}
                                        </Box>
                                        <Box sx={{ flex: "1" }}>
                                            From: {slot.cStartTime}
                                        </Box>
                                        <Box sx={{ flex: "1" }}>
                                            To: {slot.cEndTime}
                                        </Box>
                                        <IconButton
                                            onClick={() => {
                                                setSlots((prev) => {
                                                    return prev.filter(
                                                        (x) => x.id !== slot.id
                                                    );
                                                });
                                            }}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </>
                                </Stack>
                            ))}
                        </Box>

                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            marginBottom={3}
                        >
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography
                                        id="modal-modal-title"
                                        variant="h6"
                                        component="h2"
                                        className="textPrimary"
                                    >
                                        Add Day and Time
                                    </Typography>
                                    <FormControl sx={{ mt: 2 }} fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Day
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={courseDay}
                                            label="Age"
                                            onChange={(e) =>
                                                setCourseDay(e.target.value)
                                            }
                                        >
                                            <MenuItem value={"Sunday"}>
                                                Sunday
                                            </MenuItem>
                                            <MenuItem value={"Monday"}>
                                                Monday
                                            </MenuItem>
                                            <MenuItem value={"Tuesday"}>
                                                Tuesday
                                            </MenuItem>
                                            <MenuItem value={"Wednesday"}>
                                                Wednesday
                                            </MenuItem>
                                            <MenuItem value={"Thursday"}>
                                                Thursday
                                            </MenuItem>
                                            <MenuItem value={"Friday"}>
                                                Friday
                                            </MenuItem>
                                            <MenuItem value={"Saturday"}>
                                                Saturday
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Stack direction={"row"} gap={1}>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DemoContainer
                                                components={["TimePicker"]}
                                            >
                                                <TimePicker
                                                    label="Start"
                                                    value={courseStartTime}
                                                    onChange={(e) =>
                                                        setCourseStartTime(e)
                                                    }
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DemoContainer
                                                components={["TimePicker"]}
                                            >
                                                <TimePicker
                                                    label="End"
                                                    value={courseEndTime}
                                                    onChange={(e) =>
                                                        setCourseEndTime(e)
                                                    }
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Stack>
                                    <Button onClick={addSlot} className="btnSecondary">Add</Button>
                                </Box>
                            </Modal>
                        </Stack>

                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            marginBottom={3}
                        >
                            <FormLabel sx={{ flex: "1" }}>
                                Duration (Weeks)
                            </FormLabel>
                            <TextField
                                type="number"
                                variant="outlined"
                                color="primary"
                                required
                                sx={{ flex: "1" }}
                                value={courseDuration}
                                onChange={(e) =>
                                    setCourseDuration(e.target.value)
                                }
                            ></TextField>
                        </Stack>

                        <Button type="submit" variant="contained" className="btnPrimary" sx={{ mt: 3 }}>
                            Add
                        </Button>
                    </FormControl>

                    {submissionStatus && (
                        <Alert
                            sx={{ padding: "10px" }}
                            icon={<CheckIcon fontSize="inherit" />}
                            severity="success"
                        >
                            {submissionStatus}
                        </Alert>
                    )}
                </Stack>
            </form>
        </>
    );
}
