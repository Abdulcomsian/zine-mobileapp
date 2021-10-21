import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {LocaleConfig, Calendar} from 'react-native-calendars';
import fontFamily from '../constants/fontFamily';
import Mainheader from '../components/header';
import {monthArr} from '../lib/utilts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
var dateArray = [
  {date: '2021-10-14'},
  {date: '2021-10-13'},
  {date: '2021-10-12'},
];

const getDate = date => {
  console.log(date);
};

function CalenderScreen({navigation}) {
  const {bottom} = useSafeAreaInsets();
  const [selectDate, isSelectDate] = useState();
  return (
    <View style={[styles.mainContainer]}>
      <Mainheader title="Calendar" navigation={navigation} />
      <Calendar
        style={{
          margin: 20,
          borderRadius: 15,
        }}
        theme={{
          backgroundColor: '#F8F8F8',
          calendarBackground: '#F8F8F8',
          dayTextColor: '#2d4150',
          textDayHeaderFontSize: 12,
          textDayHeaderFontFamily: fontFamily.POPPINS_REGULAR,
          textDayHeaderFontWeight: '300',
          monthTextColor: 'blue',
          textSectionTitleColor: '#5F5F5F',
        }}
        // Initially visible month. Default = Date()
        current={'2021-10-11'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        // minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={'2012-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={getDate}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // renderArrow={direction => <Arrow />}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={true}
        // Disable right arrow. Default = false
        disableArrowRight={true}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter
        renderHeader={dd => {
          const NewDate = new Date(dd);
          return (
            <Text
              style={{
                fontFamily: fontFamily.POPPINS_SEMI,
                fontSize: 18,
                color: '#008DD5',
              }}>
              {monthArr[NewDate.getMonth()]} {NewDate.getFullYear()}
            </Text>
          );
        }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        markingType={'custom'}
        markedDates={dateArray.reduce((pre, cur) => {
          pre[cur.date] = {
            customStyles: {
              container: {
                backgroundColor: '#008DD5',
              },
              text: {
                color: '#fff',
                textAlign: 'center',
                fontFamily: fontFamily.POPPINS_REGULAR,
              },
            },
          };
          return pre;
        }, {})}
      />
      <ScrollView contentContainerStyle={{paddingBottom: bottom + 63}}>
        <View style={styles.appointmentView}>
          <TouchableOpacity onPress={() => navigation.navigate('Appoinment')}>
            <View style={styles.currentEvent}>
              <View style={styles.appointmentData}>
                <Text style={styles.currentTrainingText}>Training</Text>
                <Text style={styles.currentTimeText}>11.30 pm</Text>
              </View>
              <View>
                <Text style={styles.currentDateText}>9</Text>
                <Text style={styles.currentDateText}>Oct</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Appoinment')}>
            <View style={styles.appointmentMulti}>
              <View style={styles.appointmentData}>
                <Text style={styles.trainingText}>Training</Text>
                <Text style={styles.timeText}>11.30 pm</Text>
              </View>
              <View>
                <Text style={styles.dateText}>9</Text>
                <Text style={styles.dateText}>Oct</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.appointmentMulti}>
              <View style={styles.appointmentData}>
                <Text style={styles.trainingText}>Training</Text>
                <Text style={styles.timeText}>11.30 pm</Text>
              </View>
              <View>
                <Text style={styles.dateText}>9</Text>
                <Text style={styles.dateText}>Oct</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.appointmentMulti}>
              <View style={styles.appointmentData}>
                <Text style={styles.trainingText}>Training</Text>
                <Text style={styles.timeText}>11.30 pm</Text>
              </View>
              <View>
                <Text style={styles.dateText}>9</Text>
                <Text style={styles.dateText}>Oct</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.appointmentMulti}>
              <View style={styles.appointmentData}>
                <Text style={styles.trainingText}>Training</Text>
                <Text style={styles.timeText}>11.30 pm</Text>
              </View>
              <View>
                <Text style={styles.dateText}>9</Text>
                <Text style={styles.dateText}>Oct</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.appointmentMulti}>
              <View style={styles.appointmentData}>
                <Text style={styles.trainingText}>Training</Text>
                <Text style={styles.timeText}>11.30 pm</Text>
              </View>
              <View>
                <Text style={styles.dateText}>9</Text>
                <Text style={styles.dateText}>Oct</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.appointmentMulti}>
              <View style={styles.appointmentData}>
                <Text style={styles.trainingText}>Training</Text>
                <Text style={styles.timeText}>11.30 pm</Text>
              </View>
              <View>
                <Text style={styles.dateText}>9</Text>
                <Text style={styles.dateText}>Oct</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default CalenderScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  currentEvent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#008DD5',
    height: 70,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 15,
    paddingLeft: 35,
    paddingRight: 35,
  },
  appointmentMulti: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#fff',
    height: 70,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 15,
    paddingLeft: 35,
    paddingRight: 35,
    elevation: 2,
  },
  appointmentView: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 30,
  },
  currentTrainingText: {
    fontFamily: fontFamily.POPPINS_SEMI,
    color: '#fff',
    fontSize: 14,
  },
  trainingText: {
    fontFamily: fontFamily.POPPINS_SEMI,
    color: '#5F5F5F',
    fontSize: 14,
  },
  currentTimeText: {
    fontFamily: fontFamily.POPPINS_LIGHT,
    color: '#fff',
    fontSize: 14,
  },
  timeText: {
    fontFamily: fontFamily.POPPINS_LIGHT,
    color: '#CFCFCF',
    fontSize: 14,
  },
  currentDateText: {
    fontFamily: fontFamily.POPPINS_SEMI,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  dateText: {
    fontFamily: fontFamily.POPPINS_SEMI,
    color: '#008DD5',
    fontSize: 20,
    textAlign: 'center',
  },
});
