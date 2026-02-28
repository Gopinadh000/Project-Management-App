import { Box, Select, TextField } from "@mui/material";
import APPModal from "../../../../components/modal/Modal";
import { BorderLeftRounded } from "@mui/icons-material";
import InputFeild from "../../../../components/input-fields/input-feild/InputFeild";
import TextAreaFeild from "../../../../components/input-fields/text-area/TextAreaFeild";
import SelectFeild from "../../../../components/input-fields/select-feild/SelectFeild";
import StatusAutocomplete from "../../../../components/input-fields/select/SelectFeild";
import DateFeild from "../../../../components/input-fields/date-feild/DateFeild";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

const TasksModal = ({ open, onClose }: any) => {
  return (
    <div>
      <APPModal
        sx={{
          borderRadius: "10px !important",
          margin: "10px",
          height: "97vh",
        }}
        modalType="side"
        size="l"
        title="Add Tasks"
        open={open}
        onClose={onClose}
        // footerComponent={<div> Footer </div>}
      >
        <>
          <InputFeild label="Task Name" placeholder="Task Name" required />
          <TextAreaFeild label="Description" />
          <Box className="flex gap-4 mt-2">
            <StatusAutocomplete
              label="Assignee"
              options={[
                "Gopinadh",
                "AJAY",
                "Vijay",
                "Hari",
                "Siva",
                "Kanna",
                "Nani",
                "Nanu",
              ]}
            />
            <StatusAutocomplete
              label="Priority"
              options={["Low", "Medium", "High", "Medium"]}
            />
          </Box>
          <Box className="flex gap-4 mt-2">
            <StatusAutocomplete
              label="Status"
              options={["Open", "In Progress", "Completed", "On Hold"]}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                sx={{
                  width: "100%",
                  // height: "65px !important",
                  // border: "1px solid red",
                }}
                components={["DesktopDatePicker"]}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <DemoItem
                    label="Desktop variant"
                    sx={{ width: "100%", margin: "0px " }}
                  >
                    <DesktopDatePicker
                      defaultValue={dayjs("2022-04-17")}
                      slotProps={{
                        field: {
                          clearable: true,

                          // onClear: () => setCleared(true),
                        },
                        textField: {
                          size: "small",
                          sx: {
                            width: 260,
                            "& .MuiInputBase-root": {
                              height: 36,

                              paddingRight: "2px",
                            },
                            "& .MuiInputBase-input": {
                              margin: 0,
                              // width: "60%",
                              // padding: "6px 8px",
                            },
                            "& .MuiInputAdornment-root": {
                              // marginRight: 200,
                              // position: "absolute",
                              // right: 0,
                              // height: "100%",

                              display: "flex",
                              alignItems: "center",
                              // paddingRight: "4px",
                            },
                          },
                        },
                      }}
                      sx={{
                        width: 260,
                        /* fix icon alignment */
                        "& .MuiSvgIcon-root": {
                          fontSize: 10,
                        },
                        "& .MuiStack-root": {
                          width: "40px",
                        },
                        "& .MuiFormControl-root": {
                          margin: 0,
                        },

                        /* reduce calendar padding */
                        "& .MuiPickersLayout-root": {
                          padding: "8px",
                        },

                        /* reduce calendar height */
                        "& .MuiDayCalendar-root": {
                          maxHeight: 200,
                        },
                      }}
                    />
                  </DemoItem>
                </Box>
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </>
      </APPModal>
    </div>
  );
};

export default TasksModal;
