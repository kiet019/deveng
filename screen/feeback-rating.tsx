import { Button, Text } from "react-native-paper";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { FeedBackInput } from "../components/input/feedback-input";
import { GridBox } from "../components/common/grid";
import { Spacing } from "../components/common/spacing";
import Slider from "@react-native-community/slider";
import { TextInput, View } from "react-native";
import {
  FeedbackImageCard,
  FeedbackImageCardProps,
} from "../components/card/feedback-image-card";

const SliderButton = require("../assets/icons/slider-button.png");
const Worst = require("../assets/icons/worst.png");
const NotGood = require("../assets/icons/not-good.png");
const Fine = require("../assets/icons/fine.png");
const LookGood = require("../assets/icons/look-good.png");
const VeryGood = require("../assets/icons/very-good.png");
export default function FeedbackRatingScreen() {
  return (
    <SignInWelcomeLayout paddingTop={15} paddingHorizontal={20}>
      <View style={{ flex: 1 }}>
        <GridBox spacing={30}>
          <FeedBackInput title="Receptivity level" placeholder="well" />
          <FeedBackInput title="Desired skills" placeholder="well" />
        </GridBox>
        <Spacing spacing={1} />
        <Text
          style={{
            color: "#2071B2",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Share your experience in scaling
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 30
          }}
        >
          <FeedbackImageCard
            props={{ imageSrc: Worst, title: "Worst" }}
            active={true}
          />
          <FeedbackImageCard props={{ imageSrc: NotGood, title: "Not Good" }} />
          <FeedbackImageCard props={{ imageSrc: Fine, title: "Fine" }} />
          <FeedbackImageCard
            props={{ imageSrc: LookGood, title: "Look Good" }}
          />
          <FeedbackImageCard
            props={{ imageSrc: VeryGood, title: "Very Good" }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Slider
            style={{ width: 215, transform: [{ scale: 2 }] }}
            minimumValue={0}
            // onValueChange={(e) =>{
            //     console.log(e.toString())
            // }}
            value={1}
            thumbImage={SliderButton}
            maximumValue={5}
            step={1}
            minimumTrackTintColor="#105955"
            maximumTrackTintColor="#A5E0DD"
          />
        </View>
        <TextInput
          style={{
            padding: 5,
            marginTop: 30,
          }}
          placeholder="Add your comments..."
          multiline
        />
      </View>
      <View style={{ flex: 0.4}}>
        <Button
          style={{
            borderRadius: 5,
            backgroundColor: "#20b2aa",
          }}
          mode="contained"
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            SUBMIT
          </Text>
        </Button>
      </View>
    </SignInWelcomeLayout>
  );
}
