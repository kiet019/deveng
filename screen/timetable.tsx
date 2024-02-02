import { Button, Icon, Text } from "react-native-paper";
import { TitleCenterHeader } from "../components/header/title-center-header";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { BorderCard } from "../components/common/card";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { TextChip } from "../components/common/chip";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const datesOfWeek = ["29", "30", "31", "1", "2", "3", "4"];
export default function TimetableScreen({ navigation }: any) {
  const [activeDate, setActiveDate] = useState("29");
  return (
    <>
      <SignInWelcomeLayout paddingTop={110} paddingHorizontal={0}>
        <TitleCenterHeader
          goBack={() => navigation.goBack()}
          title="Weekly timetable"
        />
        <Text
          style={{
            marginTop: 30,
            marginBottom: 40,
            textAlign: "center",
            color: "#20639B",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Current week: 29/10/2023 - 04/11/2023
        </Text>
        <BorderCard>
          <View
            style={{
              ...styles.flexBetween,
              marginVertical: 10,
              marginHorizontal: 15,
            }}
          >
            <Icon
              source={"chevron-left-circle-outline"}
              size={25}
              color="#20639B"
            />
            <Text style={{ fontWeight: "bold", color: "#20639B" }}>
              October 2023
            </Text>
            <Icon
              source={"chevron-right-circle-outline"}
              size={25}
              color="#20639B"
            />
          </View>
          <View style={{ ...styles.flexBetween, marginVertical: 5 }}>
            {daysOfWeek.map((day, index) => (
              <Text style={{ color: "#848080" }} key={index}>
                {day}
              </Text>
            ))}
          </View>
          <View style={{ ...styles.flexBetween, marginVertical: 5 }}>
            {datesOfWeek.map((date) => (
              <DateIcon date={date} isActive={date === activeDate} />
            ))}
          </View>
        </BorderCard>
        <ScrollView>
          <DateBlock
            props={{
              classDetailList: [
                {
                  className: "xxx",
                  disableFeedback: true,
                  slot: 1,
                  subjectCode: "xxx",
                  timeEnd: "9:15",
                  timeStart: "7:00",
                },
                {
                  className: "xxx",
                  disableFeedback: false,
                  slot: 1,
                  subjectCode: "xxx",
                  timeEnd: "9:15",
                  timeStart: "7:00",
                },
              ],
              date: "29/10",
              day: "Sun",
            }}
          />
          <DateBlock
            props={{
              classDetailList: [],
              date: "30/10",
              day: "Mon",
            }}
          />
          <DateBlock
            props={{
              classDetailList: [],
              date: "1/11",
              day: "Tue",
            }}
          />
          <DateBlock
            props={{
              classDetailList: [],
              date: "2/11",
              day: "Wed",
            }}
          />
        </ScrollView>
      </SignInWelcomeLayout>
    </>
  );
}

interface DateBlockProps {
  date: string;
  day: string;
  classDetailList: ClassDetail[];
}

interface ClassDetail {
  slot: number;
  timeStart: string;
  timeEnd: string;
  className: string;
  subjectCode: string;
  disableFeedback: boolean;
}
const DateBlock = ({ props }: { props: DateBlockProps }) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <BorderCard
        style={{
          minHeight: 85,
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "#20639B", fontWeight: "bold" }}>
          {props.date}
        </Text>
        <Text style={{ marginTop: 5, fontSize: 16, color: "#20639B" }}>
          {props.day}
        </Text>
      </BorderCard>
      {props.classDetailList.length > 0 ? (
        <View
          style={{
            flex: 3.5,
          }}
        >
          {props.classDetailList.map((classDetail, index) => (
            <BorderCard
              style={{
                backgroundColor: "#f9f9f9",
                minHeight: 85,
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      borderBottomWidth: 1,
                      paddingBottom: 4,
                      marginRight: 8,
                      fontWeight: "bold",
                      transform: [{ rotate: "-90deg" }],
                    }}
                  >
                    Slot {classDetail.slot}
                  </Text>
                  <View>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                      {classDetail.timeStart}
                    </Text>
                    <Text
                      style={{ fontSize: 12, fontWeight: "bold", marginTop: 2 }}
                    >
                      {classDetail.timeEnd}
                    </Text>
                  </View>
                </View>
                <View style={{ marginVertical: 15 }}>
                  <TextChip color="white" backgroundColor="#2ee71e">
                    Link
                  </TextChip>
                </View>
                <View
                  style={{
                    backgroundColor: "#FD7144",
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 30,
                    opacity: classDetail.disableFeedback ? 0.3 : 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "white",
                    }}
                  >
                    Feedback
                  </Text>
                </View>
              </View>
              <View style={{ flex: 3, alignItems: "center" }}>
                <Text style={{ color: "#5F2222", fontWeight: "bold" }}>
                  ClassName: {classDetail.className}
                </Text>
                <Text style={{ color: "#5F2222", fontWeight: "bold" }}>
                  SubjectCode: {classDetail.subjectCode}
                </Text>
              </View>
            </BorderCard>
          ))}
        </View>
      ) : (
        <View
          style={{
            backgroundColor: "#f9f9f9",
            minHeight: 85,
            flex: 3.5,
            borderWidth: 1,
            borderColor: "#DFDFDF",
          }}
        ></View>
      )}
    </View>
  );
};

const DateIcon = ({
  date,
  isActive = false,
}: {
  date: string;
  isActive?: boolean;
}) => {
  return (
    <View
      style={{
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isActive ? "#20639B" : "white",
      }}
    >
      <Text
        style={{
          color: isActive ? "white" : "#20639B",
          fontWeight: "bold",
        }}
      >
        {date}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  flexBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
