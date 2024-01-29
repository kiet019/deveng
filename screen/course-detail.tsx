import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { Card } from "../components/common/card";
import { Button, Icon, ProgressBar } from "react-native-paper";
import { useState } from "react";

const courseImage = require("../assets/images/course-1.png");
const ClockImage = require("../assets/images/clock.png");
const ebook = require("../assets/images/ebook.png");
const pp = require("../assets/images/pp.png");
const headerCardProps = {
  imageSrc: courseImage,
  classCode: "AB2023",
  status: "Processing",
  totalStudent: 1,
  time: "19:00 - 20:30",
};
export default function CourseDetailScreen({ navigation }: any) {
  const [currentStudent, setCurrentStudent] = useState(0);
  const [yourStatus, setYourStatus] = useState(false);
  return (
    <SignInWelcomeLayout>
      <View
        style={{
          backgroundColor: "#3D5CFF",
          height: 190,
          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
          width: "105%",
          position: "absolute",
        }}
      ></View>
      <ScrollView style={{ flex: 1, marginTop: 60 }}>
        <HeaderCard
          currentStudent={currentStudent}
          totalStudent={headerCardProps.totalStudent}
          status={headerCardProps.status}
          imageSrc={headerCardProps.imageSrc}
          classCode={headerCardProps.classCode}
        />
        <AttendedCard
          yourStatus={yourStatus}
          currentStudent={currentStudent}
          setYourStatus={setYourStatus}
          setCurrentStudent={setCurrentStudent}
        />
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <CourseDetailTabs />
        </View>
      </ScrollView>
    </SignInWelcomeLayout>
  );
}

const RenderComponent = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.flexCenter}>
            <Image source={ebook} style={styles.imageProps} />
            <Text
              style={{
                fontSize: 20,
              }}
            >
              Week 1
            </Text>
          </View>
          <Icon source={"chevron-up"} size={35} />
        </View>
      </View>
      {Array.from({ length: 3 }, (_, index) => (
        <View style={styles.smallContainer} key={index}>
          <View style={styles.innerContainer}>
            <View style={styles.flexCenter}>
              <Image source={pp} style={styles.smallImageProps} />
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Week 1
              </Text>
            </View>
            <Icon source={"chevron-right"} size={35} />
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "white",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  smallContainer: {
    height: 45,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageProps: {
    marginRight: 15,
    width: 70,
    height: 70,
  },
  smallImageProps: {
    marginRight: 15,
    width: 30,
    height: 30,
  },
});
const CourseDetailTabs = () => {
  const [switchTab, setSwitchTab] = useState(true);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Pressable
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: switchTab ? "#f4f5f9" : "white",
            height: 45,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          onPress={() => {
            setSwitchTab(false);
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Learning materials
          </Text>
        </Pressable>

        <Pressable
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: switchTab ? "white" : "#f4f5f9",
            height: 45,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          onPress={() => {
            setSwitchTab(true);
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Homework
          </Text>
        </Pressable>
      </View>
      <RenderComponent />
    </>
  );
};

const AttendedCard = ({
  yourStatus,
  currentStudent,
  setYourStatus,
  setCurrentStudent,
}: any) => {
  return (
    <Card
      style={{
        marginVertical: 5,
        marginHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={ClockImage}
          style={{
            width: 70,
            height: 70,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {headerCardProps.time}
        </Text>
        <Pressable
          disabled={yourStatus}
          onPress={() => {
            setYourStatus(!yourStatus);
            setCurrentStudent(currentStudent + 1);
          }}
        >
          <View
            style={{
              height: 55,
              width: 100,
              borderRadius: 15,
              alignItems: "center",
              paddingVertical: 16,
              backgroundColor: yourStatus ? "#3d5cff" : "#baf58c",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
              }}
            >
              {yourStatus ? "Attended" : "Not Yet"}
            </Text>
          </View>
        </Pressable>
      </View>
    </Card>
  );
};

const HeaderCard = ({
  imageSrc,
  classCode,
  status,
  currentStudent,
  totalStudent,
}: {
  currentStudent: number;
  totalStudent: number;
  status: string;
  imageSrc: any;
  classCode: string;
}) => {
  return (
    <Card
      style={{
        marginVertical: 10,
        marginHorizontal: 10,
        borderColor: "#969595",
        borderWidth: 1,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={imageSrc}
          style={{
            width: 80,
            height: 100,
            borderRadius: 10,
            marginRight: 15,
          }}
        />
        <View
          style={{ flexDirection: "column", justifyContent: "center", flex: 1 }}
        >
          <Text style={{ fontWeight: "bold" }}>Class code: {classCode}</Text>
          <View
            style={{
              marginVertical: 5,
              width: 130,
              height: 30,
              borderRadius: 15,
              backgroundColor: "#3D5CFF",
              alignItems: "center",
              paddingVertical: 2.5,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {status}
            </Text>
          </View>
          <Text
            style={{
              textAlign: "center",
              color: "#988F90",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            Sĩ số: {currentStudent}/{totalStudent}
          </Text>
          <ProgressBar
            style={{
              marginTop: 10,
              borderRadius: 100,
              transform: [{ scaleY: 2 }],
            }}
            progress={currentStudent / totalStudent}
            color={"#575559"}
          />
        </View>
      </View>
    </Card>
  );
};
