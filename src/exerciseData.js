// ============================================================
// exerciseData.js  —  PhysiQ 운동 mock 데이터
// 원본: exercise_data.csv + mapping_table.csv + muscle_table.csv
// 백엔드 연결 시 이 파일을 API fetch로 교체하면 됩니다.
// ============================================================

export const MUSCLES = [
  {
    "name": "abdominals",
    "id": "abdominals"
  },
  {
    "name": "abductors",
    "id": "abductors"
  },
  {
    "name": "adductors",
    "id": "adductors"
  },
  {
    "name": "biceps",
    "id": "biceps"
  },
  {
    "name": "calves",
    "id": "calves"
  },
  {
    "name": "chest",
    "id": "chest"
  },
  {
    "name": "forearms",
    "id": "forearms"
  },
  {
    "name": "glutes",
    "id": "glutes"
  },
  {
    "name": "hamstrings",
    "id": "hamstrings"
  },
  {
    "name": "lats",
    "id": "lats"
  },
  {
    "name": "lower back",
    "id": "lower_back"
  },
  {
    "name": "middle back",
    "id": "middle_back"
  },
  {
    "name": "neck",
    "id": "neck"
  },
  {
    "name": "quadriceps",
    "id": "quadriceps"
  },
  {
    "name": "shoulders",
    "id": "shoulders"
  },
  {
    "name": "traps",
    "id": "traps"
  },
  {
    "name": "triceps",
    "id": "triceps"
  }
];

export const EXERCISES = [
  {
    "id": "3_4_Sit-Up",
    "name": "3/4 Sit-Up",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie down on the floor and secure your feet. Your legs should be bent at the knees.\nPlace your hands behind or to the side of your head. You will begin with your back on the ground. This will be your starting position.\nFlex your hips and spine to raise your torso toward your knees.\nAt the top of the contraction your torso should be perpendicular to the ground. Reverse the motion, going only ¾ of the way down.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "3_4_Sit-Up/0.jpg",
      "3_4_Sit-Up/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Ab_Crunch_Machine",
    "name": "Ab Crunch Machine",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Select a light resistance and sit down on the ab machine placing your feet under the pads provided and grabbing the top handles. Your arms should be bent at a 90 degree angle as you rest the triceps on the pads provided. This will be your starting position.\nAt the same time, begin to lift the legs up as you crunch your upper torso. Breathe out as you perform this movement. Tip: Be sure to use a slow and controlled motion. Concentrate on using your abs to move the weight while relaxing your legs and feet.\nAfter a second pause, slowly return to the starting position as you breathe in.\nRepeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Ab_Crunch_Machine/0.jpg",
      "Ab_Crunch_Machine/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Ab_Roller",
    "name": "Ab Roller",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Hold the Ab Roller with both hands and kneel on the floor.\nNow place the ab roller on the floor in front of you so that you are on all your hands and knees (as in a kneeling push up position). This will be your starting position.\nSlowly roll the ab roller straight forward, stretching your body into a straight position. Tip: Go down as far as you can without touching the floor with your body. Breathe in during this portion of the movement.\nAfter a pause at the stretched position, start pulling yourself back to the starting position as you breathe out. Tip: Go slowly and keep your abs tight at all times.",
    "images": [
      "Ab_Roller/0.jpg",
      "Ab_Roller/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Advanced_Kettlebell_Windmill",
    "name": "Advanced Kettlebell Windmill",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "kettlebells",
    "instructions": "Clean and press a kettlebell overhead with one arm.\nKeeping the kettlebell locked out at all times, push your butt out in the direction of the locked out kettlebell. Keep the non-working arm behind your back and turn your feet out at a forty-five degree angle from the arm with the kettlebell.\nLower yourself as far as possible.\nPause for a second and reverse the motion back to the starting position.",
    "images": [
      "Advanced_Kettlebell_Windmill/0.jpg",
      "Advanced_Kettlebell_Windmill/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings",
      "shoulders"
    ]
  },
  {
    "id": "Air_Bike",
    "name": "Air Bike",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie flat on the floor with your lower back pressed to the ground. For this exercise, you will need to put your hands beside your head. Be careful however to not strain with the neck as you perform it. Now lift your shoulders into the crunch position.\nBring knees up to where they are perpendicular to the floor, with your lower legs parallel to the floor. This will be your starting position.\nNow simultaneously, slowly go through a cycle pedal motion kicking forward with the right leg and bringing in the knee of the left leg. Bring your right elbow close to your left knee by crunching to the side, as you breathe out.\nGo back to the initial position as you breathe in.\nCrunch to the opposite side as you cycle your legs and bring closer your left elbow to your right knee and exhale.\nContinue alternating in this manner until all of the recommended repetitions for each side have been completed.",
    "images": [
      "Air_Bike/0.jpg",
      "Air_Bike/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Alternate_Hammer_Curl",
    "name": "Alternate Hammer Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand up with your torso upright and a dumbbell in each hand being held at arms length. The elbows should be close to the torso.\nThe palms of the hands should be facing your torso. This will be your starting position.\nWhile holding the upper arm stationary, curl the right weight forward while contracting the biceps as you breathe out. Continue the movement until your biceps is fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Tip: Only the forearms should move.\nSlowly begin to bring the dumbbells back to starting position as your breathe in.\nRepeat the movement with the left hand. This equals one repetition.\nContinue alternating in this manner for the recommended amount of repetitions.",
    "images": [
      "Alternate_Hammer_Curl/0.jpg",
      "Alternate_Hammer_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Alternate_Heel_Touchers",
    "name": "Alternate Heel Touchers",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Lie on the floor with the knees bent and the feet on the floor around 18-24 inches apart. Your arms should be extended by your side. This will be your starting position.\nCrunch over your torso forward and up about 3-4 inches to the right side and touch your right heel as you hold the contraction for a second. Exhale while performing this movement.\nNow go back slowly to the starting position as you inhale.\nNow crunch over your torso forward and up around 3-4 inches to the left side and touch your left heel as you hold the contraction for a second. Exhale while performing this movement and then go back to the starting position as you inhale. Now that both heels have been touched, that is considered 1 repetition.\nContinue alternating sides in this manner until all prescribed repetitions are done.",
    "images": [
      "Alternate_Heel_Touchers/0.jpg",
      "Alternate_Heel_Touchers/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Alternate_Incline_Dumbbell_Curl",
    "name": "Alternate Incline Dumbbell Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit down on an incline bench with a dumbbell in each hand being held at arms length. Tip: Keep the elbows close to the torso.This will be your starting position.\nWhile holding the upper arm stationary, curl the right weight forward while contracting the biceps as you breathe out. As you do so, rotate the hand so that the palm is facing up. Continue the movement until your biceps is fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Tip: Only the forearms should move.\nSlowly begin to bring the dumbbell back to starting position as your breathe in.\nRepeat the movement with the left hand. This equals one repetition.\nContinue alternating in this manner for the recommended amount of repetitions.",
    "images": [
      "Alternate_Incline_Dumbbell_Curl/0.jpg",
      "Alternate_Incline_Dumbbell_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Alternating_Cable_Shoulder_Press",
    "name": "Alternating Cable Shoulder Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Move the cables to the bottom of the tower and select an appropriate weight.\nGrasp the cables and hold them at shoulder height, palms facing forward. This will be your starting position.\nKeeping your head and chest up, extend through the elbow to press one side directly over head.\nAfter pausing at the top, return to the starting position and repeat on the opposite side.",
    "images": [
      "Alternating_Cable_Shoulder_Press/0.jpg",
      "Alternating_Cable_Shoulder_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Alternating_Deltoid_Raise",
    "name": "Alternating Deltoid Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "In a standing position, hold a pair of dumbbells at your side.\nKeeping your elbows slightly bent, raise the weights directly in front of you to shoulder height, avoiding any swinging or cheating.\nReturn the weights to your side.\nOn the next repetition, raise the weights laterally, raising them out to your side to about shoulder height.\nReturn the weights to the starting position and continue alternating to the front and side.",
    "images": [
      "Alternating_Deltoid_Raise/0.jpg",
      "Alternating_Deltoid_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Alternating_Floor_Press",
    "name": "Alternating Floor Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Lie on the floor with two kettlebells next to your shoulders.\nPosition one in place on your chest and then the other, gripping the kettlebells on the handle with the palms facing forward.\nExtend both arms, so that the kettlebells are being held above your chest. Lower one kettlebell, bringing it to your chest and turn the wrist in the direction of the locked out kettlebell.\nRaise the kettlebell and repeat on the opposite side.",
    "images": [
      "Alternating_Floor_Press/0.jpg",
      "Alternating_Floor_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "abdominals",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Alternating_Hang_Clean",
    "name": "Alternating Hang Clean",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place two kettlebells between your feet. To get in the starting position, push your butt back and look straight ahead.\nClean one kettlebell to your shoulder and hold on to the other kettlebell in a hanging position. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulders. Rotate your wrist as you do so.\nLower the cleaned kettlebell to a hanging position and clean the alternate kettlebell. Repeat.",
    "images": [
      "Alternating_Hang_Clean/0.jpg",
      "Alternating_Hang_Clean/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "biceps",
      "calves",
      "forearms",
      "glutes",
      "lower back",
      "traps"
    ]
  },
  {
    "id": "Alternating_Kettlebell_Press",
    "name": "Alternating Kettlebell Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so.\nPress one directly overhead by extending through the elbow, turning it so the palm faces forward while holding the other kettlebell stationary .\nLower the pressed kettlebell to the starting position and immediately press with your other arm.",
    "images": [
      "Alternating_Kettlebell_Press/0.jpg",
      "Alternating_Kettlebell_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Alternating_Kettlebell_Row",
    "name": "Alternating Kettlebell Row",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "kettlebells",
    "instructions": "Place two kettlebells in front of your feet. Bend your knees slightly and push your butt out as much as possible. As you bend over to get into the starting position grab both kettlebells by the handles.\nPull one kettlebell off of the floor while holding on to the other kettlebell. Retract the shoulder blade of the working side, as you flex the elbow, drawing the kettlebell towards your stomach or rib cage.\nLower the kettlebell in the working arm and repeat with your other arm.",
    "images": [
      "Alternating_Kettlebell_Row/0.jpg",
      "Alternating_Kettlebell_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Alternating_Renegade_Row",
    "name": "Alternating Renegade Row",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place two kettlebells on the floor about shoulder width apart. Position yourself on your toes and your hands as though you were doing a pushup, with the body straight and extended. Use the handles of the kettlebells to support your upper body. You may need to position your feet wide for support.\nPush one kettlebell into the floor and row the other kettlebell, retracting the shoulder blade of the working side as you flex the elbow, pulling it to your side.\nThen lower the kettlebell to the floor and begin the kettlebell in the opposite hand. Repeat for several reps.",
    "images": [
      "Alternating_Renegade_Row/0.jpg",
      "Alternating_Renegade_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "abdominals",
      "biceps",
      "chest",
      "lats",
      "triceps"
    ]
  },
  {
    "id": "Anti-Gravity_Press",
    "name": "Anti-Gravity Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Place a bar on the ground behind the head of an incline bench.\nLay on the bench face down. With a pronated grip, pick the barbell up from the floor. Flex the elbows, performing a reverse curl to bring the bar near your chest. This will be your starting position.\nTo begin, press the barbell out in front of your head by extending your elbows. Keep your arms parallel to the ground throughout the movement.\nReturn to the starting position and repeat to complete the set.",
    "images": [
      "Anti-Gravity_Press/0.jpg",
      "Anti-Gravity_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "middle back",
      "traps",
      "triceps"
    ]
  },
  {
    "id": "Arnold_Dumbbell_Press",
    "name": "Arnold Dumbbell Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Sit on an exercise bench with back support and hold two dumbbells in front of you at about upper chest level with your palms facing your body and your elbows bent. Tip: Your arms should be next to your torso. The starting position should look like the contracted portion of a dumbbell curl.\nNow to perform the movement, raise the dumbbells as you rotate the palms of your hands until they are facing forward.\nContinue lifting the dumbbells until your arms are extended above you in straight arm position. Breathe out as you perform this portion of the movement.\nAfter a second pause at the top, begin to lower the dumbbells to the original position by rotating the palms of your hands towards you. Tip: The left arm will be rotated in a counter clockwise manner while the right one will be rotated clockwise. Breathe in as you perform this portion of the movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Arnold_Dumbbell_Press/0.jpg",
      "Arnold_Dumbbell_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Around_The_Worlds",
    "name": "Around The Worlds",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Lay down on a flat bench holding a dumbbell in each hand with the palms of the hands facing towards the ceiling. Tip: Your arms should be parallel to the floor and next to your thighs. To avoid injury, make sure that you keep your elbows slightly bent. This will be your starting position.\nNow move the dumbbells by creating a semi-circle as you displace them from the initial position to over the head. All of the movement should happen with the arms parallel to the floor at all times. Breathe in as you perform this portion of the movement.\nReverse the movement to return the weight to the starting position as you exhale.",
    "images": [
      "Around_The_Worlds/0.jpg",
      "Around_The_Worlds/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Back_Flyes_-_With_Bands",
    "name": "Back Flyes - With Bands",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "Run a band around a stationary post like that of a squat rack.\nGrab the band by the handles and stand back so that the tension in the band rises.\nExtend and lift the arms straight in front of you. Tip: Your arms should be straight and parallel to the floor while perpendicular to your torso. Your feet should be firmly planted on the floor spread at shoulder width. This will be your starting position.\nAs you exhale, move your arms to the sides and back. Keep your arms extended and parallel to the floor. Continue the movement until the arms are extended to your sides.\nAfter a pause, go back to the original position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Back_Flyes_-_With_Bands/0.jpg",
      "Back_Flyes_-_With_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "middle back",
      "triceps"
    ]
  },
  {
    "id": "Balance_Board",
    "name": "Balance Board",
    "category": "strength",
    "force": null,
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Place a balance board in front of you.\nStand up on it and try to balance yourself.\nHold the balance for as long as desired.",
    "images": [
      "Balance_Board/0.jpg",
      "Balance_Board/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "quadriceps"
    ]
  },
  {
    "id": "Ball_Leg_Curl",
    "name": "Ball Leg Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "exercise ball",
    "instructions": "Begin on the floor laying on your back with your feet on top of the ball.\nPosition the ball so that when your legs are extended your ankles are on top of the ball. This will be your starting position.\nRaise your hips off of the ground, keeping your weight on the shoulder blades and your feet.\nFlex the knees, pulling the ball as close to you as you can, contracting the hamstrings.\nAfter a brief pause, return to the starting position.",
    "images": [
      "Ball_Leg_Curl/0.jpg",
      "Ball_Leg_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes"
    ]
  },
  {
    "id": "Band_Assisted_Pull-Up",
    "name": "Band Assisted Pull-Up",
    "category": "strength",
    "force": null,
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Choke the band around the center of the pullup bar. You can use different bands to provide varying levels of assistance.\nPull the end of the band down, and place one bent knee into the loop, ensuring it won't slip out. Take a medium to wide grip on the bar. This will be your starting position.\nPull yourself upward by contracting the lats as you flex the elbow. The elbow should be driven to your side. Pull to the front, attempting to get your chin over the bar. Avoid swinging or jerking movements.\nAfter a brief pause, return to the starting position.",
    "images": [
      "Band_Assisted_Pull-Up/0.jpg",
      "Band_Assisted_Pull-Up/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "abdominals",
      "forearms",
      "middle back"
    ]
  },
  {
    "id": "Band_Good_Morning",
    "name": "Band Good Morning",
    "category": "powerlifting",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "Using a 41 inch band, stand on one end, spreading your feet a small amount. Bend at the hips to loop the end of the band behind your neck. This will be your starting position.\nKeeping your legs straight, extend through the hips to come to a near vertical position.\nEnsure that you do not round your back as you go down back to the starting position.",
    "images": [
      "Band_Good_Morning/0.jpg",
      "Band_Good_Morning/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "glutes",
      "lower back"
    ]
  },
  {
    "id": "Band_Good_Morning_Pull_Through",
    "name": "Band Good Morning (Pull Through)",
    "category": "powerlifting",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "Loop the band around a post. Standing a little ways away, loop the opposite end around the neck. Your hands can help hold the band in position.\nBegin by bending at the hips, getting your butt back as far as possible. Keep your back flat and bend forward to about 90 degrees. Your knees should be only slightly bent.\nReturn to the starting position be driving through with the hips to come back to a standing position.",
    "images": [
      "Band_Good_Morning_Pull_Through/0.jpg",
      "Band_Good_Morning_Pull_Through/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "glutes",
      "lower back"
    ]
  },
  {
    "id": "Band_Hip_Adductions",
    "name": "Band Hip Adductions",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "bands",
    "instructions": "Anchor a band around a solid post or other object.\nStand with your left side to the post, and put your right foot through the band, getting it around the ankle.\nStand up straight and hold onto the post if needed. This will be your starting position.\nKeeping the knee straight, raise your right legs out to the side as far as you can.\nReturn to the starting position and repeat for the desired rep count.\nSwitch sides.",
    "images": [
      "Band_Hip_Adductions/0.jpg",
      "Band_Hip_Adductions/1.jpg"
    ],
    "primaryMuscles": [
      "adductors"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Band_Pull_Apart",
    "name": "Band Pull Apart",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "bands",
    "instructions": "Begin with your arms extended straight out in front of you, holding the band with both hands.\nInitiate the movement by performing a reverse fly motion, moving your hands out laterally to your sides.\nKeep your elbows extended as you perform the movement, bringing the band to your chest. Ensure that you keep your shoulders back during the exercise.\nPause as you complete the movement, returning to the starting position under control.",
    "images": [
      "Band_Pull_Apart/0.jpg",
      "Band_Pull_Apart/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "middle back",
      "traps"
    ]
  },
  {
    "id": "Band_Skull_Crusher",
    "name": "Band Skull Crusher",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "bands",
    "instructions": "Secure a band to the base of a rack or the bench. Lay on the bench so that the band is lined up with your head.\nTake hold of the band, raising your elbows so that the upper arm is perpendicular to the floor. With the elbow flexed, the band should be above your head. This will be your starting position.\nExtend through the elbow to straighten your arm, keeping your upper arm in place. Pause at the top of the motion, and return to the starting position.",
    "images": [
      "Band_Skull_Crusher/0.jpg",
      "Band_Skull_Crusher/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Barbell_Ab_Rollout",
    "name": "Barbell Ab Rollout",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "For this exercise you will need to get into a pushup position, but instead of having your hands of the floor, you will be grabbing on to an Olympic barbell (loaded with 5-10 lbs on each side) instead. This will be your starting position.\nWhile keeping a slight arch on your back, lift your hips and roll the barbell towards your feet as you exhale. Tip: As you perform the movement, your glutes should be coming up, you should be keeping the abs tight and should maintain your back posture at all times. Also your arms should be staying perpendicular to the floor throughout the movement. If you don't, you will work out your shoulders and back more than the abs.\nAfter a second contraction at the top, start to roll the barbell back forward to the starting position slowly as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Ab_Rollout/0.jpg",
      "Barbell_Ab_Rollout/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "lower back",
      "shoulders"
    ]
  },
  {
    "id": "Barbell_Ab_Rollout_-_On_Knees",
    "name": "Barbell Ab Rollout - On Knees",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Hold an Olympic barbell loaded with 5-10lbs on each side and kneel on the floor.\nNow place the barbell on the floor in front of you so that you are on all your hands and knees (as in a kneeling push up position). This will be your starting position.\nSlowly roll the barbell straight forward, stretching your body into a straight position. Tip: Go down as far as you can without touching the floor with your body. Breathe in during this portion of the movement.\nAfter a second pause at the stretched position, start pulling yourself back to the starting position as you breathe out. Tip: Go slowly and keep your abs tight at all times.",
    "images": [
      "Barbell_Ab_Rollout_-_On_Knees/0.jpg",
      "Barbell_Ab_Rollout_-_On_Knees/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "lower back",
      "shoulders"
    ]
  },
  {
    "id": "Barbell_Bench_Press_-_Medium_Grip",
    "name": "Barbell Bench Press - Medium Grip",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie back on a flat bench. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.\nFrom the starting position, breathe in and begin coming down slowly until the bar touches your middle chest.\nAfter a brief pause, push the bar back to the starting position as you breathe out. Focus on pushing the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position at the top of the motion, hold for a second and then start coming down slowly again. Tip: Ideally, lowering the weight should take about twice as long as raising it.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the bar back in the rack.",
    "images": [
      "Barbell_Bench_Press_-_Medium_Grip/0.jpg",
      "Barbell_Bench_Press_-_Medium_Grip/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Barbell_Curl",
    "name": "Barbell Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position.\nWhile holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move.\nContinue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard.\nSlowly begin to bring the bar back to starting position as your breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Curl/0.jpg",
      "Barbell_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Barbell_Curls_Lying_Against_An_Incline",
    "name": "Barbell Curls Lying Against An Incline",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Lie against an incline bench, with your arms holding a barbell and hanging down in a horizontal line. This will be your starting position.\nWhile keeping the upper arms stationary, curl the weight up as high as you can while squeezing the biceps. Breathe out as you perform this portion of the movement. Tip: Only the forearms should move. Do not swing the arms.\nAfter a second contraction, slowly go back to the starting position as you inhale. Tip: Make sure that you go all of the way down.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Curls_Lying_Against_An_Incline/0.jpg",
      "Barbell_Curls_Lying_Against_An_Incline/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Barbell_Deadlift",
    "name": "Barbell Deadlift",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Stand in front of a loaded barbell.\nWhile keeping the back as straight as possible, bend your knees, bend forward and grasp the bar using a medium (shoulder width) overhand grip. This will be the starting position of the exercise. Tip: If it is difficult to hold on to the bar with this grip, alternate your grip or use wrist straps.\nWhile holding the bar, start the lift by pushing with your legs while simultaneously getting your torso to the upright position as you breathe out. In the upright position, stick your chest out and contract the back by bringing the shoulder blades back. Think of how the soldiers in the military look when they are in standing in attention.\nGo back to the starting position by bending at the knees while simultaneously leaning the torso forward at the waist while keeping the back straight. When the weights on the bar touch the floor you are back at the starting position and ready to perform another repetition.\nPerform the amount of repetitions prescribed in the program.",
    "images": [
      "Barbell_Deadlift/0.jpg",
      "Barbell_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "calves",
      "forearms",
      "glutes",
      "hamstrings",
      "lats",
      "middle back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Barbell_Full_Squat",
    "name": "Barbell Full Squat",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\nHold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a shoulder-width medium stance with the toes slightly pointed out. Keep your head up at all times and maintain a straight back. This will be your starting position.\nBegin to slowly lower the bar by bending the knees and sitting back with your hips as you maintain a straight posture with the head up. Continue down until your hamstrings are on your calves. Inhale as you perform this portion of the movement.\nBegin to raise the bar as you exhale by pushing the floor with the heel or middle of your foot as you straighten the legs and extend the hips to go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Full_Squat/0.jpg",
      "Barbell_Full_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Barbell_Glute_Bridge",
    "name": "Barbell Glute Bridge",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin seated on the ground with a loaded barbell over your legs. Using a fat bar or having a pad on the bar can greatly reduce the discomfort caused by this exercise. Roll the bar so that it is directly above your hips, and lay down flat on the floor.\nBegin the movement by driving through with your heels, extending your hips vertically through the bar. Your weight should be supported by your upper back and the heels of your feet.\nExtend as far as possible, then reverse the motion to return to the starting position.",
    "images": [
      "Barbell_Glute_Bridge/0.jpg",
      "Barbell_Glute_Bridge/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "calves",
      "hamstrings"
    ]
  },
  {
    "id": "Barbell_Guillotine_Bench_Press",
    "name": "Barbell Guillotine Bench Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over your neck with your arms locked. This will be your starting position.\nAs you breathe in, bring the bar down slowly until it is about 1 inch from your neck.\nAfter a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the bar back in the rack.",
    "images": [
      "Barbell_Guillotine_Bench_Press/0.jpg",
      "Barbell_Guillotine_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Barbell_Hack_Squat",
    "name": "Barbell Hack Squat",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Stand up straight while holding a barbell behind you at arms length and your feet at shoulder width. Tip: A shoulder width grip is best with the palms of your hands facing back. You can use wrist wraps for this exercise for a better grip. This will be your starting position.\nWhile keeping your head and eyes up and back straight, squat until your upper thighs are parallel to the floor. Breathe in as you slowly go down.\nPressing mainly with the heel of the foot and squeezing the thighs, go back up as you breathe out.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Hack_Squat/0.jpg",
      "Barbell_Hack_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "forearms",
      "hamstrings"
    ]
  },
  {
    "id": "Barbell_Hip_Thrust",
    "name": "Barbell Hip Thrust",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin seated on the ground with a bench directly behind you. Have a loaded barbell over your legs. Using a fat bar or having a pad on the bar can greatly reduce the discomfort caused by this exercise.\nRoll the bar so that it is directly above your hips, and lean back against the bench so that your shoulder blades are near the top of it.\nBegin the movement by driving through your feet, extending your hips vertically through the bar. Your weight should be supported by your shoulder blades and your feet. Extend as far as possible, then reverse the motion to return to the starting position.",
    "images": [
      "Barbell_Hip_Thrust/0.jpg",
      "Barbell_Hip_Thrust/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "calves",
      "hamstrings"
    ]
  },
  {
    "id": "Barbell_Incline_Bench_Press_-_Medium_Grip",
    "name": "Barbell Incline Bench Press - Medium Grip",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie back on an incline bench. Using a medium-width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.\nAs you breathe in, come down slowly until you feel the bar on you upper chest.\nAfter a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly again. Tip: it should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the bar back in the rack.",
    "images": [
      "Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg",
      "Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Barbell_Incline_Shoulder_Raise",
    "name": "Barbell Incline Shoulder Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie back on an Incline Bench. Using a medium width grip (a grip that is slightly wider than shoulder width), lift the bar from the rack and hold it straight over you with your arms straight. This will be your starting position.\nWhile keeping the arms straight, lift the bar by protracting your shoulder blades, raising the shoulders from the bench as you breathe out.\nBring back the bar to the starting position as you breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Incline_Shoulder_Raise/0.jpg",
      "Barbell_Incline_Shoulder_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "chest"
    ]
  },
  {
    "id": "Barbell_Lunge",
    "name": "Barbell Lunge",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just below shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\nHold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and step forward with your right leg and squat down through your hips, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: Do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. li>\nUsing mainly the heel of your foot, push up and go back to the starting position as you exhale.\nRepeat the movement for the recommended amount of repetitions and then perform with the left leg.",
    "images": [
      "Barbell_Lunge/0.jpg",
      "Barbell_Lunge/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Barbell_Rear_Delt_Row",
    "name": "Barbell Rear Delt Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Stand up straight while holding a barbell using a wide (higher than shoulder width) and overhand (palms facing your body) grip.\nBend knees slightly and bend over as you keep the natural arch of your back. Let the arms hang in front of you as they hold the bar. Once your torso is parallel to the floor, flare the elbows out and away from your body. Tip: Your torso and your arms should resemble the letter \"T\". Now you are ready to begin the exercise.\nWhile keeping the upper arms perpendicular to the torso, pull the barbell up towards your upper chest as you squeeze the rear delts and you breathe out. Tip: When performed correctly, this exercise should resemble a bench press in reverse. Also, refrain from using your biceps to do the work. Focus on targeting the rear delts; the arms should only act as hooks.\nSlowly go back to the initial position as you breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Rear_Delt_Row/0.jpg",
      "Barbell_Rear_Delt_Row/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats",
      "middle back"
    ]
  },
  {
    "id": "Barbell_Rollout_from_Bench",
    "name": "Barbell Rollout from Bench",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Place a loaded barbell on the ground, near the end of a bench. Kneel with both legs on the bench, and take a medium to narrow grip on the barbell. This will be your starting position.\nTo begin, extend through the hips to slowly roll the bar forward. As you roll out, flex the shoulder to roll the bar above your head. Ensure that your arms remain extended throughout the movement.\nWhen the bar has been moved as far forward as possible, return to the starting position.",
    "images": [
      "Barbell_Rollout_from_Bench/0.jpg",
      "Barbell_Rollout_from_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings",
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "Barbell_Seated_Calf_Raise",
    "name": "Barbell Seated Calf Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Place a block about 12 inches in front of a flat bench.\nSit on the bench and place the ball of your feet on the block.\nHave someone place a barbell over your upper thighs about 3 inches above your knees and hold it there. This will be your starting position.\nRaise up on your toes as high as possible as you squeeze the calves and as you breathe out.\nAfter a second contraction, slowly go back to the starting position. Tip: To get maximum benefit stretch your calves as far as you can.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Seated_Calf_Raise/0.jpg",
      "Barbell_Seated_Calf_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Barbell_Shoulder_Press",
    "name": "Barbell Shoulder Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Sit on a bench with back support in a squat rack. Position a barbell at a height that is just above your head. Grab the barbell with a pronated grip (palms facing forward).\nOnce you pick up the barbell with the correct grip width, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position.\nLower the bar down to the shoulders slowly as you inhale.\nLift the bar back up to the starting position as you exhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Shoulder_Press/0.jpg",
      "Barbell_Shoulder_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "chest",
      "triceps"
    ]
  },
  {
    "id": "Barbell_Shrug",
    "name": "Barbell Shrug",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Stand up straight with your feet at shoulder width as you hold a barbell with both hands in front of you using a pronated grip (palms facing the thighs). Tip: Your hands should be a little wider than shoulder width apart. You can use wrist wraps for this exercise for a better grip. This will be your starting position.\nRaise your shoulders up as far as you can go as you breathe out and hold the contraction for a second. Tip: Refrain from trying to lift the barbell by using your biceps.\nSlowly return to the starting position as you breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Shrug/0.jpg",
      "Barbell_Shrug/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Barbell_Shrug_Behind_The_Back",
    "name": "Barbell Shrug Behind The Back",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Stand up straight with your feet at shoulder width as you hold a barbell with both hands behind your back using a pronated grip (palms facing back). Tip: Your hands should be a little wider than shoulder width apart. You can use wrist wraps for this exercise for better grip. This will be your starting position.\nRaise your shoulders up as far as you can go as you breathe out and hold the contraction for a second. Tip: Refrain from trying to lift the barbell by using your biceps. The arms should remain stretched out at all times.\nSlowly return to the starting position as you breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Shrug_Behind_The_Back/0.jpg",
      "Barbell_Shrug_Behind_The_Back/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": [
      "forearms",
      "middle back"
    ]
  },
  {
    "id": "Barbell_Side_Bend",
    "name": "Barbell Side Bend",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Stand up straight while holding a barbell placed on the back of your shoulders (slightly below the neck). Your feet should be shoulder width apart. This will be your starting position.\nWhile keeping your back straight and your head up, bend only at the waist to the right as far as possible. Breathe in as you bend to the side. Then hold for a second and come back up to the starting position as you exhale. Tip: Keep the rest of the body stationary.\nNow repeat the movement but bending to the left instead. Hold for a second and come back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Side_Bend/0.jpg",
      "Barbell_Side_Bend/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "lower back"
    ]
  },
  {
    "id": "Barbell_Side_Split_Squat",
    "name": "Barbell Side Split Squat",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Stand up straight while holding a barbell placed on the back of your shoulders (slightly below the neck). Your feet should be placed wide apart with the foot of the lead leg angled out to the side. This will be your starting position.\nLower your body towards the side of your angled foot by bending the knee and hip of your lead leg and while keeping the opposite leg only slightly bent. Breathe in as you lower your body.\nReturn to the starting position by extending the hip and knee of the lead leg. Breathe out as you perform this movement.\nAfter performing the recommended amount of reps, repeat the movement with the opposite leg.",
    "images": [
      "Barbell_Side_Split_Squat/0.jpg",
      "Barbell_Side_Split_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Barbell_Squat",
    "name": "Barbell Squat",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack to just below shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\nHold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section).\nBegin to slowly lower the bar by bending the knees and hips as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees. Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the bar as you exhale by pushing the floor with the heel of your foot as you straighten the legs again and go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Squat/0.jpg",
      "Barbell_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Barbell_Squat_To_A_Bench",
    "name": "Barbell Squat To A Bench",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first place a flat bench or a box behind you. The flat bench is used to teach you to set your hips back and to hit depth.\n\nThen, set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\nHold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section).\nBegin to slowly lower the bar by bending the knees and sitting your hips back as you maintain a straight posture with the head up. Continue down until you slightly touch the bench behind you. Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the bar as you exhale by pushing the floor with the heel of your foot as you straighten the legs and extend the hips to go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Barbell_Squat_To_A_Bench/0.jpg",
      "Barbell_Squat_To_A_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Barbell_Step_Ups",
    "name": "Barbell Step Ups",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Stand up straight while holding a barbell placed on the back of your shoulders (slightly below the neck) and stand upright behind an elevated platform (such as the one used for spotting behind a flat bench). This is your starting position.\nPlace the right foot on the elevated platform. Step on the platform by extending the hip and the knee of your right leg. Use the heel mainly to lift the rest of your body up and place the foot of the left leg on the platform as well. Breathe out as you execute the force required to come up.\nStep down with the left leg by flexing the hip and knee of the right leg as you inhale. Return to the original standing position by placing the right foot of to next to the left foot on the initial position.\nRepeat with the right leg for the recommended amount of repetitions and then perform with the left leg.",
    "images": [
      "Barbell_Step_Ups/0.jpg",
      "Barbell_Step_Ups/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "quadriceps"
    ]
  },
  {
    "id": "Barbell_Walking_Lunge",
    "name": "Barbell Walking Lunge",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin standing with your feet shoulder width apart and a barbell across your upper back.\nStep forward with one leg, flexing the knees to drop your hips. Descend until your rear knee nearly touches the ground. Your posture should remain upright, and your front knee should stay above the front foot.\nDrive through the heel of your lead foot and extend both knees to raise yourself back up.\nStep forward with your rear foot, repeating the lunge on the opposite leg.",
    "images": [
      "Barbell_Walking_Lunge/0.jpg",
      "Barbell_Walking_Lunge/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Battling_Ropes",
    "name": "Battling Ropes",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "For this exercise you will need a heavy rope anchored at its center 15-20 feet away. Standing in front of the rope, take an end in each hand with your arms extended at your side. This will be your starting position.\nInitiate the movement by rapidly raising one arm to shoulder level as quickly as you can.\nAs you let that arm drop to the starting position, raise the opposite side.\nContinue alternating your left and right arms, whipping the ropes up and down as fast as you can.",
    "images": [
      "Battling_Ropes/0.jpg",
      "Battling_Ropes/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "chest",
      "forearms"
    ]
  },
  {
    "id": "Bench_Dips",
    "name": "Bench Dips",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "For this exercise you will need to place a bench behind your back. With the bench perpendicular to your body, and while looking away from it, hold on to the bench on its edge with the hands fully extended, separated at shoulder width. The legs will be extended forward, bent at the waist and perpendicular to your torso. This will be your starting position.\nSlowly lower your body as you inhale by bending at the elbows until you lower yourself far enough to where there is an angle slightly smaller than 90 degrees between the upper arm and the forearm. Tip: Keep the elbows as close as possible throughout the movement. Forearms should always be pointing down.\nUsing your triceps to bring your torso up again, lift yourself back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Bench_Dips/0.jpg",
      "Bench_Dips/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Bench_Press_-_Powerlifting",
    "name": "Bench Press - Powerlifting",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin by lying on the bench, getting your head beyond the bar if possible. Tuck your feet underneath you and arch your back. Using the bar to help support your weight, lift your shoulder off the bench and retract them, squeezing the shoulder blades together. Use your feet to drive your traps into the bench. Maintain this tight body position throughout the movement.\nHowever wide your grip, it should cover the ring on the bar. Pull the bar out of the rack without protracting your shoulders. Focus on squeezing the bar and trying to pull it apart.\nLower the bar to your lower chest or upper stomach. The bar, wrist, and elbow should stay in line at all times.\nPause when the barbell touches your torso, and then drive the bar up with as much force as possible. The elbows should be tucked in until lockout.",
    "images": [
      "Bench_Press_-_Powerlifting/0.jpg",
      "Bench_Press_-_Powerlifting/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "forearms",
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "Bench_Press_-_With_Bands",
    "name": "Bench Press - With Bands",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "Using a flat bench secure a band under the leg of the bench that is nearest to your head.\nOnce the band is secure, grab it by both handles and lie down on the bench.\nExtend your arms so that you are holding the band handles in front of you at shoulder width.\nOnce at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position.\nBring down the handles slowly until your elbow forms a 90 degree angle. Keep full control at all times.\nAs you breathe out, bring the handles up using your pectoral muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions of your training program.",
    "images": [
      "Bench_Press_-_With_Bands/0.jpg",
      "Bench_Press_-_With_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Bench_Press_with_Chains",
    "name": "Bench Press with Chains",
    "category": "powerlifting",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Adjust the leader chain, shortening it to the desired length.Place the chains on the sleeves of the bar.\nLying on the bench, get your head beyond the bar if possible. Tuck your feet underneath you and arch your back. Using the bar to help support your weight, lift your shoulder off the bench and retract them, squeezing the shoulder blades together. Use your feet to drive your traps into the bench. Maintain this tight body position throughout the movement. However wide your grip, it should cover the ring on the bar.\nPull the bar out of the rack without protracting your shoulders. Focus on squeezing the bar and trying to pull it apart. Lower the bar to your lower chest or upper stomach. The bar, wrist, and elbow should stay in line at all times.\nPause when the barbell touches your torso, and then drive the bar up with as much force as possible. The elbows should be tucked in until lockout.",
    "images": [
      "Bench_Press_with_Chains/0.jpg",
      "Bench_Press_with_Chains/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "Bent-Arm_Barbell_Pullover",
    "name": "Bent-Arm Barbell Pullover",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie on a flat bench with a barbell using a shoulder grip width.\nHold the bar straight over your chest with a bend in your arms. This will be your starting position.\nWhile keeping your arms in the bent arm position, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest.\nAt that point, bring the barbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement.\nHold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.",
    "images": [
      "Bent-Arm_Barbell_Pullover/0.jpg",
      "Bent-Arm_Barbell_Pullover/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "chest",
      "lats",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Bent-Arm_Dumbbell_Pullover",
    "name": "Bent-Arm Dumbbell Pullover",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Place a dumbbell standing up on a flat bench.\nEnsuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench (torso across it as in forming a cross) with only your shoulders lying on the surface. Hips should be below the bench and legs bent with feet firmly on the floor. The head will be off the bench as well.\nGrasp the dumbbell with both hands and hold it straight over your chest with a bend in your arms. Both palms should be pressing against the underside one of the sides of the dumbbell. This will be your starting position. Caution: Always ensure that the dumbbell used for this exercise is secure. Using a dumbbell with loose plates can result in the dumbbell falling apart and falling on your face.\nWhile keeping your arms locked in the bent arm position, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest.\nAt that point, bring the dumbbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement.\nHold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.",
    "images": [
      "Bent-Arm_Dumbbell_Pullover/0.jpg",
      "Bent-Arm_Dumbbell_Pullover/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "lats",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Bent-Knee_Hip_Raise",
    "name": "Bent-Knee Hip Raise",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lay flat on the floor with your arms next to your sides.\nNow bend your knees at around a 75 degree angle and lift your feet off the floor by around 2 inches.\nUsing your lower abs, bring your knees in towards you as you maintain the 75 degree angle bend in your legs. Continue this movement until you raise your hips off of the floor by rolling your pelvis backward. Breathe out as you perform this portion of the movement. Tip: At the end of the movement your knees will be over your chest.\nSqueeze your abs at the top of the movement for a second and then return to the starting position slowly as you breathe in. Tip: Maintain a controlled motion at all times.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Bent-Knee_Hip_Raise/0.jpg",
      "Bent-Knee_Hip_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Bent_Over_Barbell_Row",
    "name": "Bent Over Barbell Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Holding a barbell with a pronated grip (palms facing down), bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.\nNow, while keeping the torso stationary, breathe out and lift the barbell to you. Keep the elbows close to the body and only use the forearms to hold the weight. At the top contracted position, squeeze the back muscles and hold for a brief pause.\nThen inhale and slowly lower the barbell back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Bent_Over_Barbell_Row/0.jpg",
      "Bent_Over_Barbell_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench",
    "name": "Bent Over Dumbbell Rear Delt Raise With Head On Bench",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand up straight while holding a dumbbell in each hand and with an incline bench in front of you.\nWhile keeping your back straight and maintaining the natural arch of your back, lean forward until your forehead touches the bench in front of you. Let the arms hang in front of you perpendicular to the ground. The palms of your hands should be facing each other and your torso should be parallel to the floor. This will be your starting position.\nKeeping your torso forward and stationary, and the arms straight with a slight bend at the elbows, lift the dumbbells straight to the side until both arms are parallel to the floor. Exhale as you lift the weights. Caution: avoid swinging the torso or bringing the arms back as opposed to the side.\nAfter a one second contraction at the top, slowly lower the dumbbells back to the starting position.\nRepeat the recommended amount of repetitions.",
    "images": [
      "Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/0.jpg",
      "Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Bent_Over_Low-Pulley_Side_Lateral",
    "name": "Bent Over Low-Pulley Side Lateral",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Select a weight and hold the handle of the low pulley with your right hand.\nBend at the waist until your torso is nearly parallel to the floor. Your legs should be slightly bent with your left hand placed on your lower left thigh. Your right arm should be hanging from your shoulder in front of you and with a slight bend at the elbow. This will be your starting position.\nRaise your right arm, elbow slightly bent, to the side until the arm is parallel to the floor and in line with your right ear. Breathe out as you perform this step.\nSlowly lower the weight back to the starting position as you breathe in.\nRepeat for the recommended amount of repetitions and repeat the movement with the other arm.",
    "images": [
      "Bent_Over_Low-Pulley_Side_Lateral/0.jpg",
      "Bent_Over_Low-Pulley_Side_Lateral/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "lower back",
      "middle back",
      "traps"
    ]
  },
  {
    "id": "Bent_Over_One-Arm_Long_Bar_Row",
    "name": "Bent Over One-Arm Long Bar Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Put weight on one of the ends of an Olympic barbell. Make sure that you either place the other end of the barbell in the corner of two walls; or put a heavy object on the ground so the barbell cannot slide backward.\nBend forward until your torso is as close to parallel with the floor as you can and keep your knees slightly bent.\nNow grab the bar with one arm just behind the plates on the side where the weight was placed and put your other hand on your knee. This will be your starting position.\nPull the bar straight up with your elbow in (to maximize back stimulation) until the plates touch your lower chest. Squeeze the back muscles as you lift the weight up and hold for a second at the top of the movement. Breathe out as you lift the weight. Tip: Do not allow for any swinging of the torso. Only the arm should move.\nSlowly lower the bar to the starting position getting a nice stretch on the lats. Tip: Do not let the plates touch the floor. To ensure the best range of motion, I recommend using small plates (25-lb ones) as opposed to larger plates (like 35-45lb ones).\nRepeat for the recommended amount of repetitions and switch arms.",
    "images": [
      "Bent_Over_One-Arm_Long_Bar_Row/0.jpg",
      "Bent_Over_One-Arm_Long_Bar_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats",
      "lower back",
      "traps"
    ]
  },
  {
    "id": "Bent_Over_Two-Arm_Long_Bar_Row",
    "name": "Bent Over Two-Arm Long Bar Row",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Put weight on one of the ends of an Olympic barbell. Make sure that you either place the other end of the barbell in the corner of two walls; or put a heavy object on the ground so the barbell cannot slide backward.\nBend forward until your torso is as close to parallel with the floor as you can and keep your knees slightly bent.\nNow grab the bar with both arms just behind the plates on the side where the weight was placed and put your other hand on your knee. This will be your starting position.\nPull the bar straight up with your elbows in (to maximize back stimulation) until the plates touch your lower chest. Squeeze the back muscles as you lift the weight up and hold for a second at the top of the movement. Breathe out as you lift the weight. Tip: Use a stirrup or double handle cable attachment by hooking it under the end of the bar.\nSlowly lower the bar to the starting position getting a nice stretch on the lats. Tip: Do not let the plates touch the floor. To ensure the best range of motion, I recommend using small plates (25-lb ones) as opposed to larger plates (like 35-45lb ones).\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Bent_Over_Two-Arm_Long_Bar_Row/0.jpg",
      "Bent_Over_Two-Arm_Long_Bar_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Bent_Over_Two-Dumbbell_Row",
    "name": "Bent Over Two-Dumbbell Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "With a dumbbell in each hand (palms facing your torso), bend your knees slightly and bring your torso forward by bending at the waist; as you bend make sure to keep your back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The weights should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.\nWhile keeping the torso stationary, lift the dumbbells to your side (as you breathe out), keeping the elbows close to the body (do not exert any force with the forearm other than holding the weights). On the top contracted position, squeeze the back muscles and hold for a second.\nSlowly lower the weight again to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Bent_Over_Two-Dumbbell_Row/0.jpg",
      "Bent_Over_Two-Dumbbell_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "Bent_Over_Two-Dumbbell_Row_With_Palms_In",
    "name": "Bent Over Two-Dumbbell Row With Palms In",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "With a dumbbell in each hand (palms facing each other), bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The weights should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.\nWhile keeping the torso stationary, lift the dumbbells to your side as you breathe out, squeezing your shoulder blades together. On the top contracted position, squeeze the back muscles and hold for a second.\nSlowly lower the weight again to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Bent_Over_Two-Dumbbell_Row_With_Palms_In/0.jpg",
      "Bent_Over_Two-Dumbbell_Row_With_Palms_In/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Bent_Press",
    "name": "Bent Press",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean a kettlebell to your shoulder. Clean the kettlebell to your shoulders by extending through the legs and hips as you raise the kettlebell towards your shoulder. The wrist should rotate as you do so. This will be your starting position.\nBegin my leaning to the side opposite the kettlebell, continuing until you are able to touch the ground with your free hand, keeping your eyes on the kettlebell. As you do so, press the weight vertically be extending through the elbow, keeping your arm perpendicular to the ground.\nReturn to an upright position, with the kettlebell above your head. Return the kettlebell to the shoulder and repeat for the desired number of repetitions.",
    "images": [
      "Bent_Press/0.jpg",
      "Bent_Press/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings",
      "lower back",
      "quadriceps",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Bicycling",
    "name": "Bicycling",
    "category": "cardio",
    "force": null,
    "level": "beginner",
    "mechanic": null,
    "equipment": "other",
    "instructions": "To begin, seat yourself on the bike and adjust the seat to your height.",
    "images": [
      "Bicycling/0.jpg",
      "Bicycling/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Bicycling_Stationary",
    "name": "Bicycling, Stationary",
    "category": "cardio",
    "force": null,
    "level": "beginner",
    "mechanic": null,
    "equipment": "machine",
    "instructions": "To begin, seat yourself on the bike and adjust the seat to your height.\nSelect the desired option from the menu. You may have to start pedaling to turn it on. You can use the manual setting, or you can select a program to use. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. The level of resistance can be changed throughout the workout. The handles can be used to monitor your heart rate to help you stay at an appropriate intensity.",
    "images": [
      "Bicycling_Stationary/0.jpg",
      "Bicycling_Stationary/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Board_Press",
    "name": "Board Press",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin by lying on the bench, getting your head beyond the bar if possible. One to five boards, made out of 2x6's, can be screwed together and held in place by a training partner, bands, or just tucked under your shirt.\nTuck your feet underneath you and arch your back. Using the bar to help support your weight, lift your shoulder off the bench and retract them, squeezing the shoulder blades together. Use your feet to drive your traps into the bench. Maintain this tight body position throughout the movement.\nYou can take a standard bench grip, or shoulder width to focus on the triceps. Pull the bar out of the rack without protracting your shoulders. The bar, wrist, and elbow should stay in line at all times. Focus on squeezing the bar and trying to pull it apart.\nLower the bar to the boards, and then drive the bar up with as much force as possible. The elbows should be tucked in until lockout.",
    "images": [
      "Board_Press/0.jpg",
      "Board_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "forearms",
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "Body-Up",
    "name": "Body-Up",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Assume a plank position on the ground. You should be supporting your bodyweight on your toes and forearms, keeping your torso straight. Your forearms should be shoulder-width apart. This will be your starting position.\nPressing your palms firmly into the ground, extend through the elbows to raise your body from the ground. Keep your torso rigid as you perform the movement.\nSlowly lower your forearms back to the ground by allowing the elbows to flex.\nRepeat.",
    "images": [
      "Body-Up/0.jpg",
      "Body-Up/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "abdominals",
      "forearms"
    ]
  },
  {
    "id": "Body_Tricep_Press",
    "name": "Body Tricep Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Position a bar in a rack at chest height.\nStanding, take a shoulder width grip on the bar and step a yard or two back, feet together and arms extended so that you are leaning on the bar. This will be your starting position.\nBegin by flexing the elbow, lowering yourself towards the bar.\nPause, and then reverse the motion by extending the elbows.\nProgress from bodyweight by adding chains over your shoulders.",
    "images": [
      "Body_Tricep_Press/0.jpg",
      "Body_Tricep_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Bodyweight_Flyes",
    "name": "Bodyweight Flyes",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "e-z curl bar",
    "instructions": "Position two equally loaded EZ bars on the ground next to each other. Ensure they are able to roll.\nAssume a push-up position over the bars, supporting your weight on your toes and hands with your arms extended and body straight.\nPlace your hands on the bars. This will be your starting position.\nUsing a slow and controlled motion, move your hands away from the midline of your body, rolling the bars apart. Inhale during this portion of the motion.\nAfter moving the bars as far apart as you can, return to the starting position by pulling them back together. Exhale as you perform this movement.",
    "images": [
      "Bodyweight_Flyes/0.jpg",
      "Bodyweight_Flyes/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "abdominals",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Bodyweight_Mid_Row",
    "name": "Bodyweight Mid Row",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Begin by taking a medium to wide grip on a pull-up apparatus with your palms facing away from you. From a hanging position, tuck your knees to your chest, leaning back and getting your legs over your side of the pull-up apparatus. This will be your starting position.\nBeginning with your arms straight, flex the elbows and retract the shoulder blades to raise your body up until your legs contact the pull-up apparatus.\nAfter a brief pause, return to the starting position.",
    "images": [
      "Bodyweight_Mid_Row/0.jpg",
      "Bodyweight_Mid_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Bodyweight_Squat",
    "name": "Bodyweight Squat",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Stand with your feet shoulder width apart. You can place your hands behind your head. This will be your starting position.\nBegin the movement by flexing your knees and hips, sitting back with your hips.\nContinue down to full depth if you are able,and quickly reverse the motion until you return to the starting position. As you squat, keep your head and chest up and push your knees out.",
    "images": [
      "Bodyweight_Squat/0.jpg",
      "Bodyweight_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Bodyweight_Walking_Lunge",
    "name": "Bodyweight Walking Lunge",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": null,
    "instructions": "Begin standing with your feet shoulder width apart and your hands on your hips.\nStep forward with one leg, flexing the knees to drop your hips. Descend until your rear knee nearly touches the ground. Your posture should remain upright, and your front knee should stay above the front foot.\nDrive through the heel of your lead foot and extend both knees to raise yourself back up.\nStep forward with your rear foot, repeating the lunge on the opposite leg.",
    "images": [
      "Bodyweight_Walking_Lunge/0.jpg",
      "Bodyweight_Walking_Lunge/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Bosu_Ball_Cable_Crunch_With_Side_Bends",
    "name": "Bosu Ball Cable Crunch With Side Bends",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Connect a standard handle to each arm of a cable machine, and position them in the most downward position.\nGrab a Bosu Ball and position it in front and center of the cable machine.\nLie down on the Bosu Ball with the small of your back arched around the ball. Your rear end should be close to the floor without touching it.\nWith both hands, reach back and grab the handle of each cable.\nWith your feet positioned in a wide stance, extend your arms straight out in front of you and in between your knees. Your hands should be at knee level.\nKeep your arms straight and in-line with the upward angle of the cable. Elevate your torso in a crunching motion without dropping or bending your arms.\nMaintain the rigid position with your arms. Slowly descend back to the starting position with your back arched around the Bosu Ball and your abdominals elongated.\nRepeat the same series of movements to failure.\nOnce you reach failure, keep your abs tight and raise your torso into plank position so your back is elevated off the Bosu Ball.\nLower your arms down to your side; keep them straight. Start doing alternating side bends; reach for your heels! This finishing movement will focus on your obliques.",
    "images": [
      "Bosu_Ball_Cable_Crunch_With_Side_Bends/0.jpg",
      "Bosu_Ball_Cable_Crunch_With_Side_Bends/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Bottoms-Up_Clean_From_The_Hang_Position",
    "name": "Bottoms-Up Clean From The Hang Position",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Initiate the exercise by standing upright with a kettlebell in one hand.\nSwing the kettlebell back forcefully and then reverse the motion forcefully. Crush the kettlebell handle as hard as possible and raise the kettlebell to your shoulder.",
    "images": [
      "Bottoms-Up_Clean_From_The_Hang_Position/0.jpg",
      "Bottoms-Up_Clean_From_The_Hang_Position/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": [
      "biceps",
      "shoulders"
    ]
  },
  {
    "id": "Bottoms_Up",
    "name": "Bottoms Up",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Begin by lying on your back on the ground. Your legs should be straight and your arms at your side. This will be your starting position.\nTo perform the movement, tuck the knees toward your chest by flexing the hips and knees. Following this, extend your legs directly above you so that they are perpendicular to the ground. Rotate and elevate your pelvis to raise your glutes from the floor.\nAfter a brief pause, return to the starting position.",
    "images": [
      "Bottoms_Up/0.jpg",
      "Bottoms_Up/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Box_Squat",
    "name": "Box Squat",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "The box squat allows you to squat to desired depth and develop explosive strength in the squat movement. Begin in a power rack with a box at the appropriate height behind you. Typically, you would aim for a box height that brings you to a parallel squat, but you can train higher or lower if desired.\nBegin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wider for more emphasis on the back, glutes, adductors, and hamstrings, or closer together for more quad development. Keep your head facing forward.\nWith your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips until you are seated on the box. Ideally, your shins should be perpendicular to the ground. Pause when you reach the box, and relax the hip flexors. Never bounce off of a box.\nKeeping the weight on your heels and pushing your feet and knees out, drive upward off of the box as you lead the movement with your head. Continue upward, maintaining tightness head to toe.",
    "images": [
      "Box_Squat/0.jpg",
      "Box_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "adductors",
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Box_Squat_with_Bands",
    "name": "Box Squat with Bands",
    "category": "powerlifting",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin in a power rack with a box at the appropriate height behind you. Set up the bands on the sleeves, secured to either band pegs, the rack, or dumbbells so that there is appropriate tension. If dumbbells are used, secure them so that they don't move. Also, ensure that the dumbbells you are using are heavy enough for the bands that you are using. Additional plates can be used to hold the dumbbells down. If more tension is needed, you can either widen the base on the floor or choke the bands. Typically, you would aim for a box height that brings you to a parallel squat, but you can train higher or lower if desired.\nBegin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wider for more emphasis on the back, glutes, adductors, and hamstrings, or closer together for more quad development. Keep your head facing forward.\nWith your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips until you are seated on the box. Ideally, your shins should be perpendicular to the ground. Pause when you reach the box, and relax the hip flexors. Never bounce off of a box.\nKeeping the weight on your heels and pushing your feet and knees out, drive upward off of the box as you lead the movement with your head. Continue upward, maintaining tightness head to toe. Use care to return the barbell to the rack.",
    "images": [
      "Box_Squat_with_Bands/0.jpg",
      "Box_Squat_with_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "abductors",
      "adductors",
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Box_Squat_with_Chains",
    "name": "Box Squat with Chains",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin in a power rack with a box at the appropriate height behind you. Typically, you would aim for a box height that brings you to a parallel squat, but you can train higher or lower if desired.\nTo set up the chains, begin by looping the leader chain over the sleeves of the bar. The heavy chain should be attached using a snap hook. Adjust the length of the lead chain so that a few links are still on the floor at the top of the movement.\nBegin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wider for more emphasis on the back, glutes, adductors, and hamstrings, or closer together for more quad development. Keep your head facing forward.\nWith your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips until you are seated on the box. Ideally, your shins should be perpendicular to the ground. Pause when you reach the box, and relax the hip flexors. Never bounce off of a box.\nKeeping the weight on your heels and pushing your feet and knees out, drive upward off of the box as you lead the movement with your head. Continue upward, maintaining tightness head to toe.",
    "images": [
      "Box_Squat_with_Chains/0.jpg",
      "Box_Squat_with_Chains/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "abductors",
      "adductors",
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Bradford_Rocky_Presses",
    "name": "Bradford/Rocky Presses",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Sit on a Military Press Bench with a bar at shoulder level with a pronated grip (palms facing forward). Tip: Your grip should be wider than shoulder width and it should create a 90-degree angle between the forearm and the upper arm as the barbell goes down. This is your starting position.\nOnce you pick up the barbell with the correct grip, lift the bar up over your head by locking your arms.\nNow lower the bar down to the back of the head slowly as you inhale.\nLift the bar back up to the starting position as you exhale.\nLower the bar down to the starting position slowly as you inhale. This is one repetition.\nAlternate in this manner until you complete the recommended amount of repetitions.",
    "images": [
      "Bradford_Rocky_Presses/0.jpg",
      "Bradford_Rocky_Presses/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Butt-Ups",
    "name": "Butt-Ups",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Begin a pushup position but with your elbows on the ground and resting on your forearms. Your arms should be bent at a 90 degree angle.\nArch your back slightly out rather than keeping your back completely straight.\nRaise your glutes toward the ceiling, squeezing your abs tightly to close the distance between your ribcage and hips. The end result will be that you'll end up in a high bridge position. Exhale as you perform this portion of the movement.\nLower back down slowly to your starting position as you breathe in. Tip: Don't let your back sag downwards.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Butt-Ups/0.jpg",
      "Butt-Ups/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Butt_Lift_Bridge",
    "name": "Butt Lift (Bridge)",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Lie flat on the floor on your back with the hands by your side and your knees bent. Your feet should be placed around shoulder width. This will be your starting position.\nPushing mainly with your heels, lift your hips off the floor while keeping your back straight. Breathe out as you perform this part of the motion and hold at the top for a second.\nSlowly go back to the starting position as you breathe in.",
    "images": [
      "Butt_Lift_Bridge/0.jpg",
      "Butt_Lift_Bridge/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings"
    ]
  },
  {
    "id": "Butterfly",
    "name": "Butterfly",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Sit on the machine with your back flat on the pad.\nTake hold of the handles. Tip: Your upper arms should be positioned parallel to the floor; adjust the machine accordingly. This will be your starting position.\nPush the handles together slowly as you squeeze your chest in the middle. Breathe out during this part of the motion and hold the contraction for a second.\nReturn back to the starting position slowly as you inhale until your chest muscles are fully stretched.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Butterfly/0.jpg",
      "Butterfly/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Chest_Press",
    "name": "Cable Chest Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Adjust the weight to an appropriate amount and be seated, grasping the handles. Your upper arms should be about 45 degrees to the body, with your head and chest up. The elbows should be bent to about 90 degrees. This will be your starting position.\nBegin by extending through the elbow, pressing the handles together straight in front of you. Keep your shoulder blades retracted as you execute the movement.\nAfter pausing at full extension, return to th starting position, keeping tension on the cables.\nYou can also execute this movement with your back off the pad, at an incline or decline, or alternate hands.",
    "images": [
      "Cable_Chest_Press/0.jpg",
      "Cable_Chest_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Cable_Crossover",
    "name": "Cable Crossover",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "To get yourself into the starting position, place the pulleys on a high position (above your head), select the resistance to be used and hold the pulleys in each hand.\nStep forward in front of an imaginary straight line between both pulleys while pulling your arms together in front of you. Your torso should have a small forward bend from the waist. This will be your starting position.\nWith a slight bend on your elbows in order to prevent stress at the biceps tendon, extend your arms to the side (straight out at both sides) in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms and torso should remain stationary; the movement should only occur at the shoulder joint.\nReturn your arms back to the starting position as you breathe out. Make sure to use the same arc of motion used to lower the weights.\nHold for a second at the starting position and repeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Cable_Crossover/0.jpg",
      "Cable_Crossover/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Cable_Crunch",
    "name": "Cable Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Kneel below a high pulley that contains a rope attachment.\nGrasp cable rope attachment and lower the rope until your hands are placed next to your face.\nFlex your hips slightly and allow the weight to hyperextend the lower back. This will be your starting position.\nWith the hips stationary, flex the waist as you contract the abs so that the elbows travel towards the middle of the thighs. Exhale as you perform this portion of the movement and hold the contraction for a second.\nSlowly return to the starting position as you inhale. Tip: Make sure that you keep constant tension on the abs throughout the movement. Also, do not choose a weight so heavy that the lower back handles the brunt of the work.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Cable_Crunch/0.jpg",
      "Cable_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Deadlifts",
    "name": "Cable Deadlifts",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Move the cables to the bottom of the towers and select an appropriate weight. Stand directly in between the uprights.\nTo begin, squat down be flexing your hips and knees until you can reach the handles.\nAfter grasping them, begin your ascent. Driving through your heels extend your hips and knees keeping your hands hanging at your side. Keep your head and chest up throughout the movement.\nAfter reaching a full standing position, Return to the starting position and repeat.",
    "images": [
      "Cable_Deadlifts/0.jpg",
      "Cable_Deadlifts/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "forearms",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Cable_Hammer_Curls_-_Rope_Attachment",
    "name": "Cable Hammer Curls - Rope Attachment",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Attach a rope attachment to a low pulley and stand facing the machine about 12 inches away from it.\nGrasp the rope with a neutral (palms-in) grip and stand straight up keeping the natural arch of the back and your torso stationary.\nPut your elbows in by your side and keep them there stationary during the entire movement. Tip: Only the forearms should move; not your upper arms. This will be your starting position.\nUsing your biceps, pull your arms up as you exhale until your biceps touch your forearms. Tip: Remember to keep the elbows in and your upper arms stationary.\nAfter a 1 second contraction where you squeeze your biceps, slowly start to bring the weight back to the original position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Cable_Hammer_Curls_-_Rope_Attachment/0.jpg",
      "Cable_Hammer_Curls_-_Rope_Attachment/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Hip_Adduction",
    "name": "Cable Hip Adduction",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Stand in front of a low pulley facing forward with one leg next to the pulley and the other one away.\nAttach the ankle cuff to the cable and also to the ankle of the leg that is next to the pulley.\nNow step out and away from the stack with a wide stance and grasp the bar of the pulley system.\nStand on the foot that does not have the ankle cuff (the far foot) and allow the leg with the cuff to be pulled towards the low pulley. This will be your starting position.\nNow perform the movement by moving the leg with the ankle cuff in front of the far leg by using the inner thighs to abduct the hip. Breathe out during this portion of the movement.\nSlowly return to the starting position as you breathe in.\nRepeat for the recommended amount of repetitions and then repeat the same movement with the opposite leg.",
    "images": [
      "Cable_Hip_Adduction/0.jpg",
      "Cable_Hip_Adduction/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Incline_Pushdown",
    "name": "Cable Incline Pushdown",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Lie on incline an bench facing away from a high pulley machine that has a straight bar attachment on it.\nGrasp the straight bar attachment overhead with a pronated (overhand; palms down) shoulder width grip and extend your arms in front of you. The bar should be around 2 inches away from your upper thighs. This will be your starting position.\nKeeping the upper arms stationary, lift your arms back in a semi circle until the bar is straight over your head. Breathe in during this portion of the movement.\nSlowly go back to the starting position using your lats and hold the contraction once you reach the starting position. Breathe out during the execution of this movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Cable_Incline_Pushdown/0.jpg",
      "Cable_Incline_Pushdown/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Incline_Triceps_Extension",
    "name": "Cable Incline Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Lie on incline an bench facing away from a high pulley machine that has a straight bar attachment on it.\nGrasp the straight bar attachment overhead with a pronated (overhand; palms down) narrow grip (less than shoulder width) and keep your elbows tucked in to your sides. Your upper arms should create around a 25 degree angle when measured from the floor.\nKeeping the upper arms stationary, extend the arms as you flex the triceps. Breathe out during this portion of the movement and hold the contraction for a second.\nSlowly go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Cable_Incline_Triceps_Extension/0.jpg",
      "Cable_Incline_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Internal_Rotation",
    "name": "Cable Internal Rotation",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Sit next to a low pulley sideways (with legs stretched in front of you or crossed) and grasp the single hand cable attachment with the arm nearest to the cable. Tip: If you can adjust the pulley's height, you can use a flat bench to sit on instead.\nPosition the elbow against your side with the elbow bent at 90° and the arm pointing towards the pulley. This will be your starting position.\nPull the single hand cable attachment toward your body by internally rotating your shoulder until your forearm is across your abs. You will be creating an imaginary semi-circle. Tip: The forearm should be perpendicular to your torso at all times.\nSlowly go back to the initial position.\nRepeat for the recommended amount of repetitions and then repeat the movement with the next arm.",
    "images": [
      "Cable_Internal_Rotation/0.jpg",
      "Cable_Internal_Rotation/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Iron_Cross",
    "name": "Cable Iron Cross",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Begin by moving the pulleys to the high position, select the resistance to be used, and take a handle in each hand.\nStand directly between both pulleys with your arms extended out to your sides. Your head and chest should be up while your arms form a \"T\". This will be your starting position.\nKeeping the elbows extended, pull your arms straight to your sides.\nReturn your arms back to the starting position after a pause at the peak contraction.\nContinue the movement for the prescribed number of repetitions.",
    "images": [
      "Cable_Iron_Cross/0.jpg",
      "Cable_Iron_Cross/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Judo_Flip",
    "name": "Cable Judo Flip",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Connect a rope attachment to a tower, and move the cable to the lowest pulley position. Stand with your side to the cable with a wide stance, and grab the rope with both hands.\nTwist your body away from the pulley as you bring the rope over your shoulder like you're performing a judo flip.\nShift your weight between your feet as you twist and crunch forward, pulling the cable downward.\nReturn to the starting position and repeat until failure.\nThen, reposition and repeat the same series of movements on the opposite side.",
    "images": [
      "Cable_Judo_Flip/0.jpg",
      "Cable_Judo_Flip/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Lying_Triceps_Extension",
    "name": "Cable Lying Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Lie on a flat bench and grasp the straight bar attachment of a low pulley with a narrow overhand grip. Tip: The easiest way to do this is to have someone hand you the bar as you lay down.\nWith your arms extended, position the bar over your torso. Your arms and your torso should create a 90-degree angle. This will be your starting position.\nLower the bar by bending at the elbow while keeping the upper arms stationary and elbows in. Go down until the bar lightly touches your forehead. Breathe in as you perform this portion of the movement.\nFlex the triceps as you lift the bar back to its starting position. Exhale as you perform this portion of the movement.\nHold for a second at the contracted position and repeat for the recommended amount of repetitions.",
    "images": [
      "Cable_Lying_Triceps_Extension/0.jpg",
      "Cable_Lying_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_One_Arm_Tricep_Extension",
    "name": "Cable One Arm Tricep Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "With your right hand, grasp a single handle attached to the high-cable pulley using a supinated (underhand; palms facing up) grip. You should be standing directly in front of the weight stack.\nNow pull the handle down so that your upper arm and elbow are locked in to the side of your body. Your upper arm and forearm should form an acute angle (less than 90-degrees). You can keep the other arm by the waist and you can have one leg in front of you and the other one back for better balance. This will be your starting position.\nAs you contract the triceps, move the single handle attachment down to your side until your arm is straight. Breathe out as you perform this movement. Tip: Only the forearms should move. Your upper arms should remain stationary at all times.\nSqueeze the triceps and hold for a second in this contracted position.\nSlowly return the handle to the starting position.\nRepeat for the recommended amount of repetitions and then perform the same movement with the other arm.",
    "images": [
      "Cable_One_Arm_Tricep_Extension/0.jpg",
      "Cable_One_Arm_Tricep_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Preacher_Curl",
    "name": "Cable Preacher Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Place a preacher bench about 2 feet in front of a pulley machine.\nAttach a straight bar to the low pulley.\nSit at the preacher bench with your elbow and upper arms firmly on top of the bench pad and have someone hand you the bar from the low pulley.\nGrab the bar and fully extend your arms on top of the preacher bench pad. This will be your starting position.\nNow start pilling the weight up towards your shoulders and squeeze the biceps hard at the top of the movement. Exhale as you perform this motion. Also, hold for a second at the top.\nNow slowly lower the weight to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Cable_Preacher_Curl/0.jpg",
      "Cable_Preacher_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Cable_Rear_Delt_Fly",
    "name": "Cable Rear Delt Fly",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Adjust the pulleys to the appropriate height and adjust the weight. The pulleys should be above your head.\nGrab the left pulley with your right hand and the right pulley with your left hand, crossing them in front of you. This will be your starting position.\nInitiate the movement by moving your arms back and outward, keeping your arms straight as you execute the movement.\nPause at the end of the motion before returning the handles to the start position.",
    "images": [
      "Cable_Rear_Delt_Fly/0.jpg",
      "Cable_Rear_Delt_Fly/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Reverse_Crunch",
    "name": "Cable Reverse Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Connect an ankle strap attachment to a low pulley cable and position a mat on the floor in front of it.\nSit down with your feet toward the pulley and attach the cable to your ankles.\nLie down, elevate your legs and bend your knees at a 90-degree angle. Your legs and the cable should be aligned. If not, adjust the pulley up or down until they are.\nWith your hands behind your head, bring your knees inward to your torso and elevate your hips off the floor.\nPause for a moment and in a slow and controlled manner drop your hips and bring your legs back to the starting 90-degree angle. You should still have tension on your abs in the resting position.\nRepeat the same movement to failure.",
    "images": [
      "Cable_Reverse_Crunch/0.jpg",
      "Cable_Reverse_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Rope_Overhead_Triceps_Extension",
    "name": "Cable Rope Overhead Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Attach a rope to the bottom pulley of the pulley machine.\nGrasping the rope with both hands, extend your arms with your hands directly above your head using a neutral grip (palms facing each other). Your elbows should be in close to your head and the arms should be perpendicular to the floor with the knuckles aimed at the ceiling. This will be your starting position.\nSlowly lower the rope behind your head as you hold the upper arms stationary. Inhale as you perform this movement and pause when your triceps are fully stretched.\nReturn to the starting position by flexing your triceps as you breathe out.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Cable_Rope_Overhead_Triceps_Extension/0.jpg",
      "Cable_Rope_Overhead_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Rope_Rear-Delt_Rows",
    "name": "Cable Rope Rear-Delt Rows",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Sit in the same position on a low pulley row station as you would if you were doing seated cable rows for the back.\nAttach a rope to the pulley and grasp it with an overhand grip. Your arms should be extended and parallel to the floor with the elbows flared out.\nKeep your lower back upright and slide your hips back so that your knees are slightly bent. This will be your starting position.\nPull the cable attachment towards your upper chest, just below the neck, as you keep your elbows up and out to the sides. Continue this motion as you exhale until the elbows travel slightly behind the back. Tip: Keep your upper arms horizontal, perpendicular to the torso and parallel to the floor throughout the motion.\nGo back to the initial position where the arms are extended and the shoulders are stretched forward. Inhale as you perform this portion of the movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Cable_Rope_Rear-Delt_Rows/0.jpg",
      "Cable_Rope_Rear-Delt_Rows/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back"
    ]
  },
  {
    "id": "Cable_Russian_Twists",
    "name": "Cable Russian Twists",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Connect a standard handle attachment, and position the cable to a middle pulley position.\nLie on a stability ball perpendicular to the cable and grab the handle with one hand. You should be approximately arm's length away from the pulley, with the tension of the weight on the cable.\nGrab the handle with both hands and fully extend your arms above your chest. You hands should be directly in-line with the pulley. If not, adjust the pulley up or down until they are.\nKeep your hips elevated and abs engaged. Rotate your torso away from the pulley for a full-quarter rotation. Your body should be flat from head to knees.\nPause for a moment and in a slow and controlled manner reset to the starting position. You should still have side tension on the cable in the resting position.\nRepeat the same movement to failure.\nThen, reposition and repeat the same series of movements on the opposite side.",
    "images": [
      "Cable_Russian_Twists/0.jpg",
      "Cable_Russian_Twists/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Seated_Crunch",
    "name": "Cable Seated Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Seat on a flat bench with your back facing a high pulley.\nGrasp the cable rope attachment with both hands (with the palms of the hands facing each other) and place your hands securely over both shoulders. Tip: Allow the weight to hyperextend the lower back slightly. This will be your starting position.\nWith the hips stationary, flex the waist so the elbows travel toward the hips. Breathe out as you perform this step.\nAs you inhale, go back to the initial position slowly.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Cable_Seated_Crunch/0.jpg",
      "Cable_Seated_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Seated_Lateral_Raise",
    "name": "Cable Seated Lateral Raise",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Stand in the middle of two low pulleys that are opposite to each other and place a flat bench right behind you (in perpendicular fashion to you; the narrow edge of the bench should be the one behind you). Select the weight to be used on each pulley.\nNow sit at the edge of the flat bench behind you with your feet placed in front of your knees.\nBend forward while keeping your back flat and rest your torso on the thighs.\nHave someone give you the single handles attached to the pulleys. Grasp the left pulley with the right hand and the right pulley with the left after you select your weight. The pulleys should run under your knees and your arms will be extended with palms facing each other and a slight bend at the elbows. This will be the starting position.\nWhile keeping the arms stationary, raise the upper arms to the sides until they are parallel to the floor and at shoulder height. Exhale during the execution of this movement and hold the contraction for a second.\nSlowly lower your arms to the starting position as you inhale.\nRepeat for the recommended amount of repetitions. Tip: Maintain upper arms perpendicular to torso and a fixed elbow position (10 degree to 30 degree angle) throughout exercise.",
    "images": [
      "Cable_Seated_Lateral_Raise/0.jpg",
      "Cable_Seated_Lateral_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "middle back",
      "traps"
    ]
  },
  {
    "id": "Cable_Shoulder_Press",
    "name": "Cable Shoulder Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Move the cables to the bottom of the towers and select an appropriate weight.\nStand directly in between the uprights. Grasp the cables and hold them at shoulder height, palms facing forward. This will be your starting position.\nKeeping your head and chest up, extend through the elbow to press the handles directly over head.\nAfter pausing at the top, return to the starting position and repeat.",
    "images": [
      "Cable_Shoulder_Press/0.jpg",
      "Cable_Shoulder_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Cable_Shrugs",
    "name": "Cable Shrugs",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Grasp a cable bar attachment that is attached to a low pulley with a shoulder width or slightly wider overhand (palms facing down) grip.\nStand erect close to the pulley with your arms extended in front of you holding the bar. This will be your starting position.\nLift the bar by elevating the shoulders as high as possible as you exhale. Hold the contraction at the top for a second. Tip: The arms should remain extended at all times. Refrain from using the biceps to help lift the bar. Only the shoulders should be moving up and down.\nLower the bar back to the original position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Cable_Shrugs/0.jpg",
      "Cable_Shrugs/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cable_Wrist_Curl",
    "name": "Cable Wrist Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Start out by placing a flat bench in front of a low pulley cable that has a straight bar attachment.\nUse your arms to grab the cable bar with a narrow to shoulder width supinated grip (palms up) and bring them up so that your forearms are resting against the top of your thighs. Your wrists should be hanging just beyond your knees.\nStart out by curling your wrist upwards and exhaling. Keep the contraction for a second.\nSlowly lower your wrists back down to the starting position while inhaling.\nYour forearms should be stationary as your wrist is the only movement needed to perform this exercise.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Cable_Wrist_Curl/0.jpg",
      "Cable_Wrist_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Calf-Machine_Shoulder_Shrug",
    "name": "Calf-Machine Shoulder Shrug",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Position yourself on the calf machine so that the shoulder pads are above your shoulders. Your torso should be straight with the arms extended normally by your side. This will be your starting position.\nRaise your shoulders up towards your ears as you exhale and hold the contraction for a full second.\nSlowly return to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Calf-Machine_Shoulder_Shrug/0.jpg",
      "Calf-Machine_Shoulder_Shrug/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Calf_Press",
    "name": "Calf Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Adjust the seat so that your legs are only slightly bent in the start position. The balls of your feet should be firmly on the platform.\nSelect an appropriate weight, and grasp the handles. This will be your starting position.\nStraighten the legs by extending the knees, just barely lifting the weight from the stack. Your ankle should be fully flexed, toes pointing up. Execute the movement by pressing downward through the balls of your feet as far as possible.\nAfter a brief pause, reverse the motion and repeat.",
    "images": [
      "Calf_Press/0.jpg",
      "Calf_Press/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Calf_Press_On_The_Leg_Press_Machine",
    "name": "Calf Press On The Leg Press Machine",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a medium (shoulder width) foot stance.\nLower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you without locking your knees. (Note: In some leg press units you can leave the safety bars on for increased safety. If your leg press unit allows for this, then this is the preferred method of performing the exercise.) Your torso and the legs should make perfect 90-degree angle. Now carefully place your toes and balls of your feet on the lower portion of the platform with the heels extending off. Toes should be facing forward, outwards or inwards as described at the beginning of the chapter. This will be your starting position.\nPress on the platform by raising your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down.\nGo back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Calf_Press_On_The_Leg_Press_Machine/0.jpg",
      "Calf_Press_On_The_Leg_Press_Machine/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Calf_Raise_On_A_Dumbbell",
    "name": "Calf Raise On A Dumbbell",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Hang on to a sturdy object for balance and stand on a dumbbell handle, preferably one with round plates so that it rolls as in this manner you have to work harder to stabilize yourself; thus increasing the effectiveness of the exercise.\nNow roll your foot slightly forward so that you can get a nice stretch of the calf. This will be your starting position.\nLift the calf as you roll your foot over the top of the handle so that you get a full extension. Exhale during the execution of this movement. Contract the calf hard at the top and hold for a second. Tip: As you come up, roll the dumbbell slightly backward.\nNow inhale as you roll the dumbbell slightly forward as you come down to get a better stretch.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Calf_Raise_On_A_Dumbbell/0.jpg",
      "Calf_Raise_On_A_Dumbbell/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Calf_Raises_-_With_Bands",
    "name": "Calf Raises - With Bands",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "bands",
    "instructions": "Grab an exercise band and stand on it with your toes making sure that the length of the band between the foot and the arms is the same for both sides.\nWhile holding the handles of the band, raise the arms to the side of your head as if you were getting ready to perform a shoulder press. The palms should be facing forward with the elbows bent and to the sides. This movement will create tension on the band. This will be your starting position.\nKeeping the hands by your shoulder, stand up on your toes as you exhale and contract the calves hard at the top of the movement.\nAfter a one second contraction, slowly go back down to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Calf_Raises_-_With_Bands/0.jpg",
      "Calf_Raises_-_With_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Car_Drivers",
    "name": "Car Drivers",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "While standing upright, hold a barbell plate in both hands at the 3 and 9 o'clock positions. Your palms should be facing each other and your arms should be extended straight out in front of you. This will be your starting position.\nInitiate the movement by rotating the plate as far to one side as possible. Use the same type of movement you would use to turn a steering wheel to one side.\nReverse the motion, turning it all the way to the opposite side.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Car_Drivers/0.jpg",
      "Car_Drivers/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Chain_Handle_Extension",
    "name": "Chain Handle Extension",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "You will need two cable handle attachments and a flat bench, as well as chains, for this exercise. Clip the middle of the chains to the handles, and position yourself on the flat bench. Your elbows should be pointing straight up.\nBegin by extending through the elbow, keeping your upper arm still, with your wrists pronated.\nPause at the lockout, and reverse the motion to return to the starting position.",
    "images": [
      "Chain_Handle_Extension/0.jpg",
      "Chain_Handle_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Chain_Press",
    "name": "Chain Press",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Begin by connecting the chains to the cable handle attachments. Position yourself on the flat bench in the same position as for a dumbbell press. Your wrists should be pronated and arms perpendicular to the floor. This will be your starting position.\nLower the chains by flexing the elbows, unloading some of the chain onto the floor.\nContinue until your elbow forms a 90 degree angle, and then reverse the motion by extending through the elbow to lockout.",
    "images": [
      "Chain_Press/0.jpg",
      "Chain_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Chair_Squat",
    "name": "Chair Squat",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "To begin, first set the bar to a position that best matches your height. Once the bar is loaded, step under it and position it across the back of your shoulders.\nTake the bar with your hands facing forward, unlock it and lift it off the rack by extending your legs.\nMove your feet forward about 18 inches in front of the bar. Position your legs using a shoulder width stance with the toes slightly pointed out. Look forward at all times and maintain a neutral or slightly arched spine. This will be your starting position.\nSlowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper and lower leg breaks 90 degrees.\nBegin to raise the bar as you exhale by pushing the floor with the heels of your feet, extending the knees and returning to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Chair_Squat/0.jpg",
      "Chair_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Chin-Up",
    "name": "Chin-Up",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Grab the pull-up bar with the palms facing your torso and a grip closer than the shoulder width.\nAs you have both arms extended in front of you holding the bar at the chosen grip width, keep your torso as straight as possible while creating a curvature on your lower back and sticking your chest out. This is your starting position. Tip: Keeping the torso as straight as possible maximizes biceps stimulation while minimizing back involvement.\nAs you breathe out, pull your torso up until your head is around the level of the pull-up bar. Concentrate on using the biceps muscles in order to perform the movement. Keep the elbows close to your body. Tip: The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar.\nAfter a second of squeezing the biceps in the contracted position, slowly lower your torso back to the starting position; when your arms are fully extended. Breathe in as you perform this portion of the movement.\nRepeat this motion for the prescribed amount of repetitions.",
    "images": [
      "Chin-Up/0.jpg",
      "Chin-Up/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "forearms",
      "middle back"
    ]
  },
  {
    "id": "Clean_and_Press",
    "name": "Clean and Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Assume a shoulder-width stance, with knees inside the arms. Now while keeping the back flat, bend at the knees and hips so that you can grab the bar with the arms fully extended and a pronated grip that is slightly wider than shoulder width. Point the elbows out to sides. The bar should be close to the shins. Position the shoulders over or slightly ahead of the bar. Establish a flat back posture. This will be your starting position.\nBegin to pull the bar by extending the knees. Move your hips forward and raise the shoulders at the same rate while keeping the angle of the back constant; continue to lift the bar straight up while keeping it close to your body.\nAs the bar passes the knee, extend at the ankles, knees, and hips forcefully, similar to a jumping motion. As you do so, continue to guide the bar with your hands, shrugging your shoulders and using the momentum from your movement to pull the bar as high as possible. The bar should travel close to your body, and you should keep your elbows out.\nAt maximum elevation, your feet should clear the floor and you should start to pull yourself under the bar. The mechanics of this could change slightly, depending on the weight used. You should descend into a squatting position as you pull yourself under the bar.\nAs the bar hits terminal height, rotate your elbows around and under the bar. Rack the bar across the front of the shoulders while keeping the torso erect and flexing the hips and knees to absorb the weight of the bar.\nStand to full height, holding the bar in the clean position.\nWithout moving your feet, press the bar overhead as you exhale. Lower the bar under control .",
    "images": [
      "Clean_and_Press/0.jpg",
      "Clean_and_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "abdominals",
      "calves",
      "glutes",
      "hamstrings",
      "lower back",
      "middle back",
      "quadriceps",
      "shoulders",
      "traps",
      "triceps"
    ]
  },
  {
    "id": "Clock_Push-Up",
    "name": "Clock Push-Up",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Move into a prone position on the floor, supporting your weight on your hands and toes.\nYour arms should be fully extended with the hands around shoulder width. Keep your body straight throughout the movement. This will be your starting position.\nDescend by flexing at the elbow, lowering your chest toward the ground.\nAt the bottom, reverse the motion by pushing yourself up through elbow extension as quickly as possible until you are air borne. Aim to \"jump\" 12-18 inches to one side.\nAs you accelerate up, move your outside foot away from your direction of travel. Leaving the ground, shift your body about 30 degrees for the next repetition.\nReturn to the starting position and repeat the exercise, working all the way around until you are back where you started.",
    "images": [
      "Clock_Push-Up/0.jpg",
      "Clock_Push-Up/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Close-Grip_Barbell_Bench_Press",
    "name": "Close-Grip Barbell Bench Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie back on a flat bench. Using a close grip (around shoulder width), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.\nAs you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that - as opposed to a regular bench press - you keep the elbows close to the torso at all times in order to maximize triceps involvement.\nAfter a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the bar back in the rack.",
    "images": [
      "Close-Grip_Barbell_Bench_Press/0.jpg",
      "Close-Grip_Barbell_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Close-Grip_Dumbbell_Press",
    "name": "Close-Grip Dumbbell Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Place a dumbbell standing up on a flat bench.\nEnsuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench with only your shoulders lying on the surface. Hips should be below the bench and your legs bent with your feet firmly on the floor.\nGrasp the dumbbell with both hands and hold it straight over your chest at arm's length. Both palms should be pressing against the underside of the sides of the dumbbell. This will be your starting position.\nInitiate the movement by lowering the dumbbell to your chest.\nReturn to the starting position by extending the elbows.",
    "images": [
      "Close-Grip_Dumbbell_Press/0.jpg",
      "Close-Grip_Dumbbell_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Close-Grip_EZ-Bar_Curl_with_Band",
    "name": "Close-Grip EZ-Bar Curl with Band",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "e-z curl bar",
    "instructions": "Attach a band to each end of the bar. Take the bar, placing a foot on the middle of the band. Stand upright with a narrow, supinated grip on the EZ bar. The elbows should be close to the torso. This will be your starting position.\nWhile keeping the upper arms in place, flex the elbows to execute the curl. Exhale as the weight is lifted.\nContinue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard.\nSlowly begin to bring the bar back to starting position as your breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Close-Grip_EZ-Bar_Curl_with_Band/0.jpg",
      "Close-Grip_EZ-Bar_Curl_with_Band/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Close-Grip_EZ-Bar_Press",
    "name": "Close-Grip EZ-Bar Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "e-z curl bar",
    "instructions": "Lie on a flat bench with an EZ bar loaded to an appropriate weight.\nUsing a narrow grip lift the bar and hold it straight over your torso with your elbows in. The arms should be perpendicular to the floor. This will be your starting position.\nNow lower the bar down to your lower chest as you breathe in. Keep the elbows in as you perform this movement.\nUsing the triceps to push the bar back up, press it back to the starting position by extending the elbows as you exhale.\nRepeat.",
    "images": [
      "Close-Grip_EZ-Bar_Press/0.jpg",
      "Close-Grip_EZ-Bar_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Close-Grip_EZ_Bar_Curl",
    "name": "Close-Grip EZ Bar Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Stand up with your torso upright while holding an E-Z Curl Bar at the closer inner handle. The palm of your hands should be facing forward and they should be slightly tilted inwards due to the shape of the bar. The elbows should be close to the torso. This will be your starting position.\nWhile holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move.\nContinue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard.\nSlowly begin to bring the bar back to starting position as your breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Close-Grip_EZ_Bar_Curl/0.jpg",
      "Close-Grip_EZ_Bar_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Close-Grip_Front_Lat_Pulldown",
    "name": "Close-Grip Front Lat Pulldown",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Sit down on a pull-down machine with a wide bar attached to the top pulley. Make sure that you adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.\nGrab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width.\nAs you have both arms extended in front of you - while holding the bar at the chosen grip width - bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.\nAs you breathe out, bring the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary (only the arms should move). The forearms should do no other work except for holding the bar; therefore do not try to pull the bar down using the forearms.\nAfter a second in the contracted position, while squeezing your shoulder blades together, slowly raise the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Inhale during this portion of the movement.\n6. Repeat this motion for the prescribed amount of repetitions.",
    "images": [
      "Close-Grip_Front_Lat_Pulldown/0.jpg",
      "Close-Grip_Front_Lat_Pulldown/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Close-Grip_Push-Up_off_of_a_Dumbbell",
    "name": "Close-Grip Push-Up off of a Dumbbell",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie on the floor and place your hands on an upright dumbbell. Supporting your weight on your toes and hands, keep your torso rigid and your elbows in with your arms straight. This will be your starting position.\nLower your body, allowing the elbows to flex while you inhale. Keep your body straight, not allowing your hips to rise or sag.\nPress yourself back up to the starting position by extending the elbows. Breathe out as you perform this step.\nAfter a pause at the contracted position, repeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Close-Grip_Push-Up_off_of_a_Dumbbell/0.jpg",
      "Close-Grip_Push-Up_off_of_a_Dumbbell/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "abdominals",
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Close-Grip_Standing_Barbell_Curl",
    "name": "Close-Grip Standing Barbell Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Hold a barbell with both hands, palms up and a few inches apart.\nStand with your torso straight and your head up. Your feet should be about shoulder width and your elbows close to your torso. This will be your starting position. Tip: You will keep your upper arms and elbows stationary throughout the movement.\nCurl the bar up in a semicircular motion until the forearms touch your biceps. Exhale as you perform this portion of the movement and contract your biceps hard for a second at the top. Tip: Avoid bending the back or using swinging motions as you lift the weight. Only the forearms should move.\nSlowly go back down to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Close-Grip_Standing_Barbell_Curl/0.jpg",
      "Close-Grip_Standing_Barbell_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Cocoons",
    "name": "Cocoons",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Begin by lying on your back on the ground. Your legs should be straight and your arms extended behind your head. This will be your starting position.\nTo perform the movement, tuck the knees toward your chest, rotating your pelvis to lift your glutes from the floor. As you do so, flex the spine, bringing your arms back over your head to perform a simultaneous crunch motion.\nAfter a brief pause, return to the starting position.",
    "images": [
      "Cocoons/0.jpg",
      "Cocoons/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Concentration_Curls",
    "name": "Concentration Curls",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit down on a flat bench with one dumbbell in front of you between your legs. Your legs should be spread with your knees bent and feet on the floor.\nUse your right arm to pick the dumbbell up. Place the back of your right upper arm on the top of your inner right thigh. Rotate the palm of your hand until it is facing forward away from your thigh. Tip: Your arm should be extended and the dumbbell should be above the floor. This will be your starting position.\nWhile holding the upper arm stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Tip: At the top of the movement make sure that the little finger of your arm is higher than your thumb. This guarantees a good contraction. Hold the contracted position for a second as you squeeze the biceps.\nSlowly begin to bring the dumbbells back to starting position as your breathe in. Caution: Avoid swinging motions at any time.\nRepeat for the recommended amount of repetitions. Then repeat the movement with the left arm.",
    "images": [
      "Concentration_Curls/0.jpg",
      "Concentration_Curls/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Cross-Body_Crunch",
    "name": "Cross-Body Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie flat on your back and bend your knees about 60 degrees.\nKeep your feet flat on the floor and place your hands loosely behind your head. This will be your starting position.\nNow curl up and bring your right elbow and shoulder across your body while bring your left knee in toward your left shoulder at the same time. Reach with your elbow and try to touch your knee. Exhale as you perform this movement. Tip: Try to bring your shoulder up towards your knee rather than just your elbow and remember that the key is to contract the abs as you perform the movement; not just to move the elbow.\nNow go back down to the starting position as you inhale and repeat with the left elbow and the right knee.\nContinue alternating in this manner until all prescribed repetitions are done.",
    "images": [
      "Cross-Body_Crunch/0.jpg",
      "Cross-Body_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cross_Body_Hammer_Curl",
    "name": "Cross Body Hammer Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand up straight with a dumbbell in each hand. Your hands should be down at your side with your palms facing in.\nWhile keeping your palms facing in and without twisting your arm, curl the dumbbell of the right arm up towards your left shoulder as you exhale. Touch the top of the dumbbell to your shoulder and hold the contraction for a second.\nSlowly lower the dumbbell along the same path as you inhale and then repeat the same movement for the left arm.\nContinue alternating in this fashion until the recommended amount of repetitions is performed for each arm.",
    "images": [
      "Cross_Body_Hammer_Curl/0.jpg",
      "Cross_Body_Hammer_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Cross_Over_-_With_Bands",
    "name": "Cross Over - With Bands",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "Secure an exercise band around a stationary post.\nWhile facing away from the post, grab the handles on both ends of the band and step forward enough to create tension on the band.\nRaise your arms to the sides, parallel to the floor, perpendicular to your torso (your torso and the arms should resemble the letter \"T\") and with the palms facing forward. Have them extended with a slight bend at the elbows. This will be your starting position.\nWhile keeping your arms straight, bring them across your chest in a semicircular motion to the front as you exhale and flex your pecs. Hold the contraction for a second.\nSlowly return to the starting position as you inhale.\nPerform for the recommended amount of repetitions.",
    "images": [
      "Cross_Over_-_With_Bands/0.jpg",
      "Cross_Over_-_With_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "biceps",
      "shoulders"
    ]
  },
  {
    "id": "Crunch_-_Hands_Overhead",
    "name": "Crunch - Hands Overhead",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Lie on the floor with your back flat and knees bent with around a 60-degree angle between the hamstrings and the calves.\nKeep your feet flat on the floor and stretch your arms overhead with your palms crossed. This will be your starting position.\nCurl your upper body forward and bring your shoulder blades just off the floor. At all times, keep your arms aligned with your head, neck and shoulder. Don't move them forward from that position. Exhale as you perform this portion of the movement and hold the contraction for a second.\nSlowly lower down to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Crunch_-_Hands_Overhead/0.jpg",
      "Crunch_-_Hands_Overhead/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Crunch_-_Legs_On_Exercise_Ball",
    "name": "Crunch - Legs On Exercise Ball",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Lie flat on your back with your feet resting on an exercise ball and your knees bent at a 90 degree angle.\nPlace your feet three to four inches apart and point your toes inward so they touch.\nPlace your hands lightly on either side of your head keeping your elbows in. Tip: Don't lock your fingers behind your head.\nPush the small of your back down in the floor in order to better isolate your abdominal muscles. This will be your starting position.\nBegin to roll your shoulders off the floor and continue to push down as hard as you can with your lower back. Your shoulders should come up off the floor only about four inches, and your lower back should remain on the floor. Breathe out as you execute this portion of the movement. Squeeze your abdominals hard at the top of the contraction and hold for a second. Tip: Focus on a slow, controlled movement. Refrain from using momentum at any time.\nSlowly go back down to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Crunch_-_Legs_On_Exercise_Ball/0.jpg",
      "Crunch_-_Legs_On_Exercise_Ball/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Crunches",
    "name": "Crunches",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Lie flat on your back with your feet flat on the ground, or resting on a bench with your knees bent at a 90 degree angle. If you are resting your feet on a bench, place them three to four inches apart and point your toes inward so they touch.\nNow place your hands lightly on either side of your head keeping your elbows in. Tip: Don't lock your fingers behind your head.\nWhile pushing the small of your back down in the floor to better isolate your abdominal muscles, begin to roll your shoulders off the floor.\nContinue to push down as hard as you can with your lower back as you contract your abdominals and exhale. Your shoulders should come up off the floor only about four inches, and your lower back should remain on the floor. At the top of the movement, contract your abdominals hard and keep the contraction for a second. Tip: Focus on slow, controlled movement - don't cheat yourself by using momentum.\nAfter the one second contraction, begin to come down slowly again to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Crunches/0.jpg",
      "Crunches/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Cuban_Press",
    "name": "Cuban Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Take a dumbbell in each hand with a pronated grip in a standing position. Raise your upper arms so that they are parallel to the floor, allowing your lower arms to hang in the \"scarecrow\" position. This will be your starting position.\nTo initiate the movement, externally rotate the shoulders to move the upper arm 180 degrees. Keep the upper arms in place, rotating the upper arms until the wrists are directly above the elbows, the forearms perpendicular to the floor.\nNow press the dumbbells by extending at the elbows, straightening your arms overhead.\nReturn to the starting position as you breathe in by reversing the steps.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Cuban_Press/0.jpg",
      "Cuban_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "traps"
    ]
  },
  {
    "id": "Dead_Bug",
    "name": "Dead Bug",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Begin lying on your back with your hands extended above you toward the ceiling.\nBring your feet, knees, and hips up to 90 degrees.\nExhale hard to bring your ribcage down and flatten your back onto the floor, rotating your pelvis up and squeezing your glutes. Hold this position throughout the movement. This will be your starting position.\nInitiate the exercise by extending one leg, straightening the knee and hip to bring the leg just above the ground.\nMaintain the position of your lumbar and pelvis as you perform the movement, as your back is going to want to arch.\nStay tight and return the working leg to the starting position.\nRepeat on the opposite side, alternating until the set is complete.",
    "images": [
      "Dead_Bug/0.jpg",
      "Dead_Bug/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Deadlift_with_Bands",
    "name": "Deadlift with Bands",
    "category": "powerlifting",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "To deadlift with short bands, simply loop them over the bar before you start, and step into them to set up. For long bands, they will need to be anchored to a secure base, such as heavy dumbbells or a rack.\nWith your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.\nLower the bar by bending at the hips and guiding it to the floor.",
    "images": [
      "Deadlift_with_Bands/0.jpg",
      "Deadlift_with_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "forearms",
      "glutes",
      "hamstrings",
      "middle back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Deadlift_with_Chains",
    "name": "Deadlift with Chains",
    "category": "powerlifting",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "You can attach the chains to the sleeves of the bar, or just drape the middle over the bar so there is a greater weight increase as you lift.\nApproach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets. With your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar.\nLook forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.\nLower the bar by bending at the hips and guiding it to the floor.",
    "images": [
      "Deadlift_with_Chains/0.jpg",
      "Deadlift_with_Chains/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "forearms",
      "glutes",
      "hamstrings",
      "middle back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Decline_Barbell_Bench_Press",
    "name": "Decline Barbell Bench Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Secure your legs at the end of the decline bench and slowly lay down on the bench.\nUsing a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack.\nAs you breathe in, come down slowly until you feel the bar on your lower chest.\nAfter a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up).\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the bar back in the rack.",
    "images": [
      "Decline_Barbell_Bench_Press/0.jpg",
      "Decline_Barbell_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Decline_Close-Grip_Bench_To_Skull_Crusher",
    "name": "Decline Close-Grip Bench To Skull Crusher",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Secure your legs at the end of the decline bench and slowly lay down on the bench.\nUsing a close grip (a grip that is slightly less than shoulder width), lift the bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack.\nNow lower the bar down to your lower chest as you breathe in. Keep the elbows in as you perform this movement.\nUsing the triceps to push the bar back up, press it back to the starting position as you exhale.\nAs you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement.\nLift the bar back to the starting position by contracting the triceps and exhaling.\nRepeat steps 3-6 until the recommended amount of repetitions is performed.",
    "images": [
      "Decline_Close-Grip_Bench_To_Skull_Crusher/0.jpg",
      "Decline_Close-Grip_Bench_To_Skull_Crusher/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Decline_Crunch",
    "name": "Decline Crunch",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Secure your legs at the end of the decline bench and lie down.\nNow place your hands lightly on either side of your head keeping your elbows in. Tip: Don't lock your fingers behind your head.\nWhile pushing the small of your back down in the bench to better isolate your abdominal muscles, begin to roll your shoulders off it.\nContinue to push down as hard as you can with your lower back as you contract your abdominals and exhale. Your shoulders should come up off the bench only about four inches, and your lower back should remain on the bench. At the top of the movement, contract your abdominals hard and keep the contraction for a second. Tip: Focus on slow, controlled movement - don't cheat yourself by using momentum.\nAfter the one second contraction, begin to come down slowly again to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Decline_Crunch/0.jpg",
      "Decline_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Decline_Dumbbell_Bench_Press",
    "name": "Decline Dumbbell Bench Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Secure your legs at the end of the decline bench and lie down with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other.\nOnce you are laying down, move the dumbbells in front of you at shoulder width.\nOnce at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position.\nBring down the weights slowly to your side as you breathe out. Keep full control of the dumbbells at all times. Tip: Throughout the motion, the forearms should always be perpendicular to the floor.\nAs you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up..\nRepeat the movement for the prescribed amount of repetitions of your training program.",
    "images": [
      "Decline_Dumbbell_Bench_Press/0.jpg",
      "Decline_Dumbbell_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Decline_Dumbbell_Flyes",
    "name": "Decline Dumbbell Flyes",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Secure your legs at the end of the decline bench and lie down with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other.\nOnce you are laying down, move the dumbbells in front of you at shoulder width. The palms of the hands should be facing each other and the arms should be perpendicular to the floor and fully extended. This will be your starting position.\nWith a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint.\nReturn your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights.\nHold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Decline_Dumbbell_Flyes/0.jpg",
      "Decline_Dumbbell_Flyes/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Decline_Dumbbell_Triceps_Extension",
    "name": "Decline Dumbbell Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Secure your legs at the end of the decline bench and lie down with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other.\nOnce you are laying down, move the dumbbells in front of you at shoulder width. The palms of the hands should be facing each other and the arms should be perpendicular to the floor and fully extended. This will be your starting position.\nAs you breathe in and you keep the upper arms stationary (and elbows in), bring the dumbbells down slowly by moving your forearms in a semicircular motion towards you until your thumbs are next to your ears. Breathe in as you perform this portion of the movement.\nLift the dumbbells back to the starting position by contracting the triceps and exhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Decline_Dumbbell_Triceps_Extension/0.jpg",
      "Decline_Dumbbell_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Decline_EZ_Bar_Triceps_Extension",
    "name": "Decline EZ Bar Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Secure your legs at the end of the decline bench and slowly lay down on the bench.\nUsing a close grip (a grip that is slightly less than shoulder width), lift the EZ bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack.\nAs you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement.\nLift the bar back to the starting position by contracting the triceps and exhaling.\nRepeat until the recommended amount of repetitions is performed.",
    "images": [
      "Decline_EZ_Bar_Triceps_Extension/0.jpg",
      "Decline_EZ_Bar_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Decline_Oblique_Crunch",
    "name": "Decline Oblique Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Secure your legs at the end of the decline bench and slowly lay down on the bench.\nRaise your upper body off the bench until your torso is about 35-45 degrees if measured from the floor.\nPut one hand beside your head and the other on your thigh. This will be your starting position.\nRaise your upper body slowly from the starting position while turning your torso to the left. Continue crunching up as you exhale until your right elbow touches your left knee. Hold this contracted position for a second. Tip: Focus on keeping your abs tight and keeping the movement slow and controlled.\nLower your body back down slowly to the starting position as you inhale.\nAfter completing one set on the right for the recommended amount of repetitions, switch to your left side. Tip: Focus on really twisting your torso and feeling the contraction when you are in the up position.",
    "images": [
      "Decline_Oblique_Crunch/0.jpg",
      "Decline_Oblique_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Decline_Push-Up",
    "name": "Decline Push-Up",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": null,
    "instructions": "Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Move your feet up to a box or bench. This will be your starting position.\nNext, lower yourself downward until your chest almost touches the floor as you inhale.\nNow breathe out and press your upper body back up to the starting position while squeezing your chest.\nAfter a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.",
    "images": [
      "Decline_Push-Up/0.jpg",
      "Decline_Push-Up/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Decline_Reverse_Crunch",
    "name": "Decline Reverse Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie on your back on a decline bench and hold on to the top of the bench with both hands. Don't let your body slip down from this position.\nHold your legs parallel to the floor using your abs to hold them there while keeping your knees and feet together. Tip: Your legs should be fully extended with a slight bend on the knee. This will be your starting position.\nWhile exhaling, move your legs towards the torso as you roll your pelvis backwards and you raise your hips off the bench. At the end of this movement your knees will be touching your chest.\nHold the contraction for a second and move your legs back to the starting position while inhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Decline_Reverse_Crunch/0.jpg",
      "Decline_Reverse_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Decline_Smith_Press",
    "name": "Decline Smith Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Place a decline bench underneath the Smith machine. Now place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Using a pronated grip that is wider than shoulder width, unlock the bar from the rack and hold it straight over you with your arms extended. This will be your starting position.\nAs you inhale, lower the bar under control by allowing the elbows to flex, lightly contacting the torso.\nAfter a brief pause, bring the bar back to the starting position by extending the elbows, exhaling as you do so.\nRepeat the movement for the prescribed amount of repetitions.\nWhen the set is complete, lock the bar back in the rack.",
    "images": [
      "Decline_Smith_Press/0.jpg",
      "Decline_Smith_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Deficit_Deadlift",
    "name": "Deficit Deadlift",
    "category": "powerlifting",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin by having a platform or weight plates that you can stand on, usually 1-3 inches in height. Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets.\nWith your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.\nLower the bar by bending at the hips and guiding it to the floor.",
    "images": [
      "Deficit_Deadlift/0.jpg",
      "Deficit_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "forearms",
      "glutes",
      "hamstrings",
      "middle back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Dip_Machine",
    "name": "Dip Machine",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Sit securely in a dip machine, select the weight and firmly grasp the handles.\nNow keep your elbows in at your sides in order to place emphasis on the triceps. The elbows should be bent at a 90 degree angle.\nAs you contract the triceps, extend your arms downwards as you exhale. Tip: At the bottom of the movement, focus on keeping a little bend in your arms to keep tension on the triceps muscle.\nNow slowly let your arms come back up to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Dip_Machine/0.jpg",
      "Dip_Machine/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Dips_-_Chest_Version",
    "name": "Dips - Chest Version",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "For this exercise you will need access to parallel bars. To get yourself into the starting position, hold your body at arms length (arms locked) above the bars.\nWhile breathing in, lower yourself slowly with your torso leaning forward around 30 degrees or so and your elbows flared out slightly until you feel a slight stretch in the chest.\nOnce you feel the stretch, use your chest to bring your body back to the starting position as you breathe out. Tip: Remember to squeeze the chest at the top of the movement for a second.\nRepeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Dips_-_Chest_Version/0.jpg",
      "Dips_-_Chest_Version/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Dips_-_Triceps_Version",
    "name": "Dips - Triceps Version",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars.\nNow, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm.\nThen, exhale and push your torso back up using your triceps to bring your body back to the starting position.\nRepeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Dips_-_Triceps_Version/0.jpg",
      "Dips_-_Triceps_Version/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Donkey_Calf_Raises",
    "name": "Donkey Calf Raises",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "For this exercise you will need access to a donkey calf raise machine. Start by positioning your lower back and hips under the padded lever provided. The tailbone area should be the one making contact with the pad.\nPlace both of your arms on the side handles and place the balls of your feet on the calf block with the heels extending off. Align the toes forward, inward or outward, depending on the area you wish to target, and straighten the knees without locking them. This will be your starting position.\nRaise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down.\nGo back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Donkey_Calf_Raises/0.jpg",
      "Donkey_Calf_Raises/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Double_Kettlebell_Alternating_Hang_Clean",
    "name": "Double Kettlebell Alternating Hang Clean",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place two kettlebells between your feet. To get in the starting position, push your butt back and look straight ahead.\nClean one kettlebell to your shoulder and hold on to the other kettlebell.\nWith a fluid motion, lower the top kettlebell while driving the bottom kettlebell up.",
    "images": [
      "Double_Kettlebell_Alternating_Hang_Clean/0.jpg",
      "Double_Kettlebell_Alternating_Hang_Clean/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "biceps",
      "calves",
      "forearms",
      "glutes",
      "lower back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Double_Kettlebell_Jerk",
    "name": "Double Kettlebell Jerk",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Hold a kettlebell by the handle in each hand.\nClean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so, so that the palms face forward. This will be your starting position.\nDip your body by bending the knees, keeping your torso upright.\nImmediately reverse direction, driving through the heels, in essence jumping to create momentum.\nAs you do so, press the kettlebells overhead to lockout by extending the arms, using your body's momentum to move the weights.\nReturn your feet to the ground in a split fashion, with one foot forward and one foot back.\nKeeping the weights overhead, return to a standing position, bringing your feet together. Lower the weights to perform the next repetition.",
    "images": [
      "Double_Kettlebell_Jerk/0.jpg",
      "Double_Kettlebell_Jerk/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "calves",
      "quadriceps",
      "triceps"
    ]
  },
  {
    "id": "Double_Kettlebell_Push_Press",
    "name": "Double Kettlebell Push Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean two kettlebells to your shoulders.\nSquat down a few inches and reverse the motion rapidly. Use the momentum from the legs to drive the kettlebells overhead.\nOnce the kettlebells are locked out, lower the kettlebells to your shoulders and repeat.",
    "images": [
      "Double_Kettlebell_Push_Press/0.jpg",
      "Double_Kettlebell_Push_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "calves",
      "quadriceps",
      "triceps"
    ]
  },
  {
    "id": "Double_Kettlebell_Snatch",
    "name": "Double Kettlebell Snatch",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place two kettlebells behind your feet. Bend your knees and sit back to pick up the kettlebells.\nSwing the kettlebells between your legs forcefully and reverse the direction.\nDrive through with your hips and lock the ketttlebells overhead in one uninterrupted motion.",
    "images": [
      "Double_Kettlebell_Snatch/0.jpg",
      "Double_Kettlebell_Snatch/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings",
      "quadriceps"
    ]
  },
  {
    "id": "Double_Kettlebell_Windmill",
    "name": "Double Kettlebell Windmill",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": null,
    "equipment": "kettlebells",
    "instructions": "Place a kettlebell in front of your front foot and clean and press a kettlebell overhead with your opposite arm. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulders. Rotate your wrist as you do so, so that the palm faces forward.\nKeeping the kettlebell locked out at all times, push your butt out in the direction of the locked out kettlebell. Turn your feet out at a forty-five degree angle from the arm with the locked out kettlebell.\nBending at the hip to one side, sticking your butt out, slowly lean until you can retrieve the kettlebell from the floor. Keep your eyes on the kettlebell that you hold over your head at all times.\nPause for a second after retrieving the kettlebell from the ground and reverse the motion back to the starting position.",
    "images": [
      "Double_Kettlebell_Windmill/0.jpg",
      "Double_Kettlebell_Windmill/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Downward_Facing_Balance",
    "name": "Downward Facing Balance",
    "category": "strength",
    "force": "static",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "exercise ball",
    "instructions": "Lie facedown on top of an exercise ball.\nWhile resting on your stomach on the ball, walk your hands forward along the floor and lift your legs, extending your elbows and knees.",
    "images": [
      "Downward_Facing_Balance/0.jpg",
      "Downward_Facing_Balance/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "abdominals",
      "hamstrings"
    ]
  },
  {
    "id": "Drag_Curl",
    "name": "Drag Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Grab a barbell with a supinated grip (palms facing forward) and get your elbows close to your torso and back. This will be your starting position.\nAs you exhale, curl the bar up while keeping the elbows to the back as you \"Drag\" the bar up by keeping it in contact with your torso. Tip: As you can see, you will not be keeping the elbows pinned to your sides, but instead you will be bringing them back. Also, do not lift your shoulders.\nSlowly go back to the starting position as you keep the bar in contact with the torso at all times.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Drag_Curl/0.jpg",
      "Drag_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Dumbbell_Alternate_Bicep_Curl",
    "name": "Dumbbell Alternate Bicep Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand (torso upright) with a dumbbell in each hand held at arms length. The elbows should be close to the torso and the palms of your hand should be facing your thighs.\nWhile holding the upper arm stationary, curl the right weight as you rotate the palm of the hands until they are facing forward. At this point continue contracting the biceps as you breathe out until your biceps is fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Tip: Only the forearms should move.\nSlowly begin to bring the dumbbell back to the starting position as your breathe in. Tip: Remember to twist the palms back to the starting position (facing your thighs) as you come down.\nRepeat the movement with the left hand. This equals one repetition.\nContinue alternating in this manner for the recommended amount of repetitions.",
    "images": [
      "Dumbbell_Alternate_Bicep_Curl/0.jpg",
      "Dumbbell_Alternate_Bicep_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Dumbbell_Bench_Press",
    "name": "Dumbbell Bench Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other.\nThen, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width.\nOnce at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position.\nThen, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it.\nRepeat the movement for the prescribed amount of repetitions of your training program.",
    "images": [
      "Dumbbell_Bench_Press/0.jpg",
      "Dumbbell_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Dumbbell_Bench_Press_with_Neutral_Grip",
    "name": "Dumbbell Bench Press with Neutral Grip",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Take a dumbbell in each hand and lay back onto a flat bench. Your feet should be flat on the floor and your shoulder blades retracted.\nMaintaining a neutral grip, palms facing each other, begin with your arms extended directly above you, perpendicular to the floor. This will be your starting position.\nBegin the movement by flexing the elbow, lowering the upper arms to the side. Descend until the dumbbells are to your torso.\nPause, then extend the elbow and return to the starting position.",
    "images": [
      "Dumbbell_Bench_Press_with_Neutral_Grip/0.jpg",
      "Dumbbell_Bench_Press_with_Neutral_Grip/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Dumbbell_Bicep_Curl",
    "name": "Dumbbell Bicep Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand up straight with a dumbbell in each hand at arm's length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. This will be your starting position.\nNow, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps. Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a brief pause as you squeeze your biceps.\nThen, inhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Dumbbell_Bicep_Curl/0.jpg",
      "Dumbbell_Bicep_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Dumbbell_Clean",
    "name": "Dumbbell Clean",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Begin standing with a dumbbell in each hand with your feet shoulder width apart.\nLower the weights to the floor by flexing at the hips and knees, pushing your hips back until the dumbbells reach the floor. This will be your starting position.\nTo initiate the movement, violently jump upward by extending the hips, knees, and ankles to acclerate the weights upward. Maintaining a neutral grip on the dumbbells, keep the arms straight until full extension is reached.\nAfter full extension, rebend the hips and knees to receive the weight in a squat position. Allow the arms to bend, guiding the dumbbells to your shoulders.\nUpon receiving the weight in the squat position, extend the hips and knees to finish in a standing position with the weights on your shoulders.",
    "images": [
      "Dumbbell_Clean/0.jpg",
      "Dumbbell_Clean/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "forearms",
      "glutes",
      "lower back",
      "quadriceps",
      "shoulders",
      "traps"
    ]
  },
  {
    "id": "Dumbbell_Floor_Press",
    "name": "Dumbbell Floor Press",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Lay on the floor holding dumbbells in your hands. Your knees can be bent. Begin with the weights fully extended above you.\nLower the weights until your upper arm comes in contact with the floor. You can tuck your elbows to emphasize triceps size and strength, or to focus on your chest angle your arms to the side.\nPause at the bottom, and then bring the weight together at the top by extending through the elbows.",
    "images": [
      "Dumbbell_Floor_Press/0.jpg",
      "Dumbbell_Floor_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Dumbbell_Flyes",
    "name": "Dumbbell Flyes",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie down on a flat bench with a dumbbell on each hand resting on top of your thighs. The palms of your hand will be facing each other.\nThen using your thighs to help raise the dumbbells, lift the dumbbells one at a time so you can hold them in front of you at shoulder width with the palms of your hands facing each other. Raise the dumbbells up like you're pressing them, but stop and hold just before you lock out. This will be your starting position.\nWith a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint.\nReturn your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights.\nHold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Dumbbell_Flyes/0.jpg",
      "Dumbbell_Flyes/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Dumbbell_Incline_Row",
    "name": "Dumbbell Incline Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Using a neutral grip, lean into an incline bench.\nTake a dumbbell in each hand with a neutral grip, beginning with the arms straight. This will be your starting position.\nRetract the shoulder blades and flex the elbows to row the dumbbells to your side.\nPause at the top of the motion, and then return to the starting position.",
    "images": [
      "Dumbbell_Incline_Row/0.jpg",
      "Dumbbell_Incline_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "forearms",
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "Dumbbell_Incline_Shoulder_Raise",
    "name": "Dumbbell Incline Shoulder Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit on an Incline Bench while holding a dumbbell on each hand on top of your thighs.\nLift your legs up to kick the weights to your shoulders and lean back. Position the dumbbells above your shoulders with your arms extended. The arms should be perpendicular to the floor with your palms facing forward and knuckles pointing towards the ceiling. This will be your starting position.\nWhile keeping the arms straight and locked, lift the dumbbells by raising the shoulders from the bench as you breathe out.\nBring back the dumbbells to the starting position as you breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Dumbbell_Incline_Shoulder_Raise/0.jpg",
      "Dumbbell_Incline_Shoulder_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Dumbbell_Lunges",
    "name": "Dumbbell Lunges",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position.\nStep forward with your right leg around 2 feet or so from the foot being left stationary behind and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground.\nUsing mainly the heel of your foot, push up and go back to the starting position as you exhale.\nRepeat the movement for the recommended amount of repetitions and then perform with the left leg.",
    "images": [
      "Dumbbell_Lunges/0.jpg",
      "Dumbbell_Lunges/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Dumbbell_Lying_One-Arm_Rear_Lateral_Raise",
    "name": "Dumbbell Lying One-Arm Rear Lateral Raise",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "While holding a dumbbell in one hand, lay with your chest down on a slightly inclined (around 15 degrees when measured from the floor) adjustable bench. The other hand can be used to hold to the leg of the bench for stability.\nPosition the palm of the hand that is holding the dumbbell in a neutral manner (palms facing your torso) as you keep the arm extended with the elbow slightly bent. This will be your starting position.\nNow raise the arm with the dumbbell to the side until your elbow is at shoulder height and your arm is roughly parallel to the floor as you exhale. Tip: Maintain your arm perpendicular to the torso while keeping your arm extended throughout the movement. Also, keep the contraction at the top for a second.\nSlowly lower the dumbbell to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Dumbbell_Lying_One-Arm_Rear_Lateral_Raise/0.jpg",
      "Dumbbell_Lying_One-Arm_Rear_Lateral_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "middle back"
    ]
  },
  {
    "id": "Dumbbell_Lying_Pronation",
    "name": "Dumbbell Lying Pronation",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie on a flat bench face down with one arm holding a dumbbell and the other hand on top of the bench folded so that you can rest your head on it.\nBend the elbows of the arm holding the dumbbell so that it creates a 90-degree angle between the upper arm and the forearm.\nNow raise the upper arm so that the forearm is perpendicular to the floor and the upper arm is perpendicular to your torso. Tip: The upper arm should be parallel to the floor and also creating a 90-degree angle with your torso. This will be your starting position.\nAs you breathe out, externally rotate your forearm so that the dumbbell is lifted forward as you maintain the 90 degree angle bend between the upper arms and the forearm. You will continue this external rotation until the forearm is parallel to the floor. At this point you will hold the contraction for a second.\nAs you breathe in, slowly go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Dumbbell_Lying_Pronation/0.jpg",
      "Dumbbell_Lying_Pronation/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Dumbbell_Lying_Rear_Lateral_Raise",
    "name": "Dumbbell Lying Rear Lateral Raise",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "While holding a dumbbell in each hand, lay with your chest down on a slightly inclined (around 15 degrees when measured from the floor) adjustable bench.\nPosition the palms of the hands in a neutral manner (palms facing your torso) as you keep the arms extended with the elbows slightly bent. This will be your starting position.\nNow raise the arms to the side until your elbows are at shoulder height and your arms are roughly parallel to the floor as you exhale. Tip: Maintain your arms perpendicular to the torso while keeping them extended throughout the movement. Also, keep the contraction at the top for a second.\nSlowly lower the dumbbells to the starting position as you inhale.\nRepeat for the recommended amount of repetitions and then switch to the other arm.",
    "images": [
      "Dumbbell_Lying_Rear_Lateral_Raise/0.jpg",
      "Dumbbell_Lying_Rear_Lateral_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Dumbbell_Lying_Supination",
    "name": "Dumbbell Lying Supination",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie sideways on a flat bench with one arm holding a dumbbell and the other hand on top of the bench folded so that you can rest your head on it.\nBend the elbows of the arm holding the dumbbell so that it creates a 90-degree angle between the upper arm and the forearm.\nNow raise the upper arm so that the forearm is parallel to the floor and perpendicular to your torso (Tip: So the forearm will be directly in front of you). The upper arm will be stationary by your torso and should be parallel to the floor (aligned with your torso at all times). This will be your starting position.\nAs you breathe out, externally rotate your forearm so that the dumbbell is lifted up in a semicircle motion as you maintain the 90 degree angle bend between the upper arms and the forearm. You will continue this external rotation until the forearm is perpendicular to the floor and the torso pointing towards the ceiling. At this point you will hold the contraction for a second.\nAs you breathe in, slowly go back to the starting position.\nRepeat for the recommended amount of repetitions and then switch to the other arm.",
    "images": [
      "Dumbbell_Lying_Supination/0.jpg",
      "Dumbbell_Lying_Supination/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Dumbbell_One-Arm_Shoulder_Press",
    "name": "Dumbbell One-Arm Shoulder Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Grab a dumbbell and either sit on a military press bench or a utility bench that has a back support on it as you place the dumbbells upright on top of your thighs or stand up straight.\nClean the dumbbell up to bring it to shoulder height. The other hand can be kept fully extended to the side, by the waist or grabbing a fixed surface.\nRotate the wrist so that the palm of your hand is facing forward. This is your starting position.\nAs you exhale, push the dumbbell up until your arm is fully extended.\nAfter a second pause, slowly come down back to the starting position as you inhale.\nRepeat for the recommended amount of repetitions and then switch arms.",
    "images": [
      "Dumbbell_One-Arm_Shoulder_Press/0.jpg",
      "Dumbbell_One-Arm_Shoulder_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Dumbbell_One-Arm_Triceps_Extension",
    "name": "Dumbbell One-Arm Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Grab a dumbbell and either sit on a military press bench or a utility bench that has a back support on it as you place the dumbbells upright on top of your thighs or stand up straight.\nClean the dumbbell up to bring it to shoulder height and then extend the arm over your head so that the whole arm is perpendicular to the floor and next to your head. The dumbbell should be on top of you. The other hand can be kept fully extended to the side, by the waist, supporting the upper arm that has the dumbbell or grabbing a fixed surface.\nRotate the wrist so that the palm of your hand is facing forward and the pinkie is facing the ceiling. This will be your starting position.\nSlowly lower the dumbbell behind your head as you hold the upper arm stationary. Inhale as you perform this movement and pause when your triceps are fully stretched.\nReturn to the starting position by flexing your triceps as you breathe out. Tip: It is imperative that only the forearm moves. The upper arm should remain at all times stationary next to your head.\nRepeat for the recommended amount of repetitions and switch arms.",
    "images": [
      "Dumbbell_One-Arm_Triceps_Extension/0.jpg",
      "Dumbbell_One-Arm_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Dumbbell_One-Arm_Upright_Row",
    "name": "Dumbbell One-Arm Upright Row",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Grab a dumbbell and stand up straight with your arm extended in front of you with a slight bend at the elbows and your back straight. This will be your starting position. Tip: The dumbbell should be resting on top of your thigh with the palm of your hands facing your thighs.\nKeep the other hand can be kept fully extended to the side, by the waist or grabbing a fixed surface. This will be your starting position.\nUse your side shoulders to lift the dumbbell as you exhale. The dumbbell should be close to the body as you move it up. Continue to lift it until the dumbbell is nearly in line with your chin. Tip: Your elbows should drive the motion. As you lift the dumbbell, your elbow should always be higher than your forearm. Also, keep your torso stationary and pause for a second at the top of the movement.\nLower the dumbbell back down slowly to the starting position. Inhale as you perform this portion of the movement.\nRepeat for the recommended amount of repetitions and switch arms.",
    "images": [
      "Dumbbell_One-Arm_Upright_Row/0.jpg",
      "Dumbbell_One-Arm_Upright_Row/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "biceps",
      "traps"
    ]
  },
  {
    "id": "Dumbbell_Prone_Incline_Curl",
    "name": "Dumbbell Prone Incline Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Grab a dumbbell on each hand and lie face down on an incline bench with your shoulders near top of the incline. Your knees can rest on the seat or your legs can be straddled to the sides (my preferred way).\nLet your arms extend and hang naturally in front of you so that they are perpendicular to the floor.\nNow keep your elbows in by your side and face the palms forward. This will be your starting position.\nRaise the dumbbells by contracting the biceps until your arms are fully flexed. Exhale as you perform this portion of the movement and ensure that only the forearms move. The upper arms should remain stationary at all times.\nLower the dumbbells until your arms are fully extended.\nRepeat for the recommended amount of times.",
    "images": [
      "Dumbbell_Prone_Incline_Curl/0.jpg",
      "Dumbbell_Prone_Incline_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Dumbbell_Raise",
    "name": "Dumbbell Raise",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Grab a dumbbell in each arm and stand up straight with your arms extended by your sides with a slight bend at the elbows and your back straight. This will be your starting position. Tip: The dumbbell should be next to your thighs with the palm of your hands facing back.\nUse your side shoulders to lift the dumbbells as you exhale. The dumbbells should be to the side of the body as you move them up. Continue to lift it until the dumbbells are nearly in line with your chin. Tip: Your elbows should drive the motion. As you lift the dumbbell, your elbow should always be higher than your forearm. Also, keep your torso stationary and pause for a second at the top of the movement.\nLower the dumbbells back down slowly to the starting position. Inhale as you perform this portion of the movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Dumbbell_Raise/0.jpg",
      "Dumbbell_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "biceps"
    ]
  },
  {
    "id": "Dumbbell_Rear_Lunge",
    "name": "Dumbbell Rear Lunge",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position.\nStep backward with your right leg around two feet or so from the left foot and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Tip: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground. Keep the torso upright during the lunge; flexible hip flexors are important. A long lunge emphasizes the Gluteus Maximus; a short lunge emphasizes Quadriceps.\nPush up and go back to the starting position as you exhale. Tip: Use the ball of your feet to push in order to accentuate the quadriceps. To focus on the glutes, press with your heels.\nNow repeat with the opposite leg.",
    "images": [
      "Dumbbell_Rear_Lunge/0.jpg",
      "Dumbbell_Rear_Lunge/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Dumbbell_Scaption",
    "name": "Dumbbell Scaption",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "This corrective exercise strengthens the muscles that stabilize your shoulder blade. Hold a light weight in each hand, hanging at your sides. Your thumbs should pointing up.\nBegin the movement raising your arms out in front of you, about 30 degrees off center. Your arms should be fully extended as you perform the movement.\nContinue until your arms are parallel to the ground, and then return to the starting position.",
    "images": [
      "Dumbbell_Scaption/0.jpg",
      "Dumbbell_Scaption/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "traps"
    ]
  },
  {
    "id": "Dumbbell_Seated_One-Leg_Calf_Raise",
    "name": "Dumbbell Seated One-Leg Calf Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Place a block on the floor about 12 inches from a flat bench.\nSit on a flat bench and place a dumbbell on your upper left thigh about 3 inches above your knee.\nNow place the ball of your left foot on the block. This will be your starting position.\nRaise your toes up as high as possible as you exhale and you contract your calf muscle. Hold the contraction for a second.\nSlowly return to the starting position, stretching as far down as possible.\nRepeat for your prescribed number of repetitions and then repeat with the right leg.",
    "images": [
      "Dumbbell_Seated_One-Leg_Calf_Raise/0.jpg",
      "Dumbbell_Seated_One-Leg_Calf_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Dumbbell_Shoulder_Press",
    "name": "Dumbbell Shoulder Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "While holding a dumbbell in each hand, sit on a military press bench or utility bench that has back support. Place the dumbbells upright on top of your thighs.\nNow raise the dumbbells to shoulder height one at a time using your thighs to help propel them up into position.\nMake sure to rotate your wrists so that the palms of your hands are facing forward. This is your starting position.\nNow, exhale and push the dumbbells upward until they touch at the top.\nThen, after a brief pause at the top contracted position, slowly lower the weights back down to the starting position while inhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Dumbbell_Shoulder_Press/0.jpg",
      "Dumbbell_Shoulder_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Dumbbell_Shrug",
    "name": "Dumbbell Shrug",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand erect with a dumbbell on each hand (palms facing your torso), arms extended on the sides.\nLift the dumbbells by elevating the shoulders as high as possible while you exhale. Hold the contraction at the top for a second. Tip: The arms should remain extended at all times. Refrain from using the biceps to help lift the dumbbells. Only the shoulders should be moving up and down.\nLower the dumbbells back to the original position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Dumbbell_Shrug/0.jpg",
      "Dumbbell_Shrug/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Dumbbell_Side_Bend",
    "name": "Dumbbell Side Bend",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand up straight while holding a dumbbell on the left hand (palms facing the torso) as you have the right hand holding your waist. Your feet should be placed at shoulder width. This will be your starting position.\nWhile keeping your back straight and your head up, bend only at the waist to the right as far as possible. Breathe in as you bend to the side. Then hold for a second and come back up to the starting position as you exhale. Tip: Keep the rest of the body stationary.\nNow repeat the movement but bending to the left instead. Hold for a second and come back to the starting position.\nRepeat for the recommended amount of repetitions and then change hands.",
    "images": [
      "Dumbbell_Side_Bend/0.jpg",
      "Dumbbell_Side_Bend/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Dumbbell_Squat",
    "name": "Dumbbell Squat",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Stand up straight while holding a dumbbell on each hand (palms facing the side of your legs).\nPosition your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section.\nBegin to slowly lower your torso by bending the knees as you maintain a straight posture with the head up. Continue down until your thighs are parallel to the floor. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise your torso as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again and go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Dumbbell_Squat/0.jpg",
      "Dumbbell_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Dumbbell_Squat_To_A_Bench",
    "name": "Dumbbell Squat To A Bench",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Stand up straight with a flat bench behind you while holding a dumbbell on each hand (palms facing the side of your legs).\nPosition your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section.\nBegin to slowly lower your torso by bending the knees as you maintain a straight posture with the head up. Continue down until you slightly touch the bench behind you. Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the bar as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again and go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Dumbbell_Squat_To_A_Bench/0.jpg",
      "Dumbbell_Squat_To_A_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Dumbbell_Step_Ups",
    "name": "Dumbbell Step Ups",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Stand up straight while holding a dumbbell on each hand (palms facing the side of your legs).\nPlace the right foot on the elevated platform. Step on the platform by extending the hip and the knee of your right leg. Use the heel mainly to lift the rest of your body up and place the foot of the left leg on the platform as well. Breathe out as you execute the force required to come up.\nStep down with the left leg by flexing the hip and knee of the right leg as you inhale. Return to the original standing position by placing the right foot of to next to the left foot on the initial position.\nRepeat with the right leg for the recommended amount of repetitions and then perform with the left leg.",
    "images": [
      "Dumbbell_Step_Ups/0.jpg",
      "Dumbbell_Step_Ups/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Dumbbell_Tricep_Extension_-Pronated_Grip",
    "name": "Dumbbell Tricep Extension -Pronated Grip",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie down on a flat bench holding two dumbbells directly above your shoulders. Your arms should be fully extended and form a 90 degree angle from your torso and the floor.\nThe palms of your hands should be facing forward, and your elbows should be tucked in. This will be your starting position.\nNow, inhale and slowly lower the dumbbells until they are near your ears. Be sure to keep your upper arms stationary and your elbows tucked in.\nThen, exhale and use your triceps to return the weight to the starting position.",
    "images": [
      "Dumbbell_Tricep_Extension_-Pronated_Grip/0.jpg",
      "Dumbbell_Tricep_Extension_-Pronated_Grip/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "EZ-Bar_Curl",
    "name": "EZ-Bar Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "e-z curl bar",
    "instructions": "Stand up straight while holding an EZ curl bar at the wide outer handle. The palms of your hands should be facing forward and slightly tilted inward due to the shape of the bar. Keep your elbows close to your torso. This will be your starting position.\nNow, while keeping your upper arms stationary, exhale and curl the weights forward while contracting the biceps. Focus on only moving your forearms.\nContinue to raise the weight until your biceps are fully contracted and the bar is at shoulder level. Hold the top contracted position for a moment and squeeze the biceps.\nThen inhale and slowly lower the bar back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "EZ-Bar_Curl/0.jpg",
      "EZ-Bar_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "EZ-Bar_Skullcrusher",
    "name": "EZ-Bar Skullcrusher",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "e-z curl bar",
    "instructions": "Using a close grip, lift the EZ bar and hold it with your elbows in as you lie on the bench. Your arms should be perpendicular to the floor. This will be your starting position.\nKeeping the upper arms stationary, lower the bar by allowing the elbows to flex. Inhale as you perform this portion of the movement. Pause once the bar is directly above the forehead.\nLift the bar back to the starting position by extending the elbow and exhaling.\nRepeat.",
    "images": [
      "EZ-Bar_Skullcrusher/0.jpg",
      "EZ-Bar_Skullcrusher/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Elbow_to_Knee",
    "name": "Elbow to Knee",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie on the floor, crossing your right leg across your bent left knee. Clasp your hands behind your head, beginning with your shoulder blades on the ground. This will be your starting position.\nPerform the motion by flexing the spine and rotating your torso to bring the left elbow to the right knee.\nReturn to the starting position and repeat the movement for the desired number of repetitions before switching sides.",
    "images": [
      "Elbow_to_Knee/0.jpg",
      "Elbow_to_Knee/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Elevated_Back_Lunge",
    "name": "Elevated Back Lunge",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Position a bar onto a rack at shoulder height loaded to an appropriate weight. Place a short, raised platform behind you.\nRack the bar onto your upper back, keeping your back arched and tight. Step onto your raised platform with both feet. This will be your starting position.\nBegin by stepping backwards with one leg. Descend by flexing your hips and knees until your knee touches the floor.\nPause, and extend through the hips and knees to rise up, returning all the way to the starting position before alternating.",
    "images": [
      "Elevated_Back_Lunge/0.jpg",
      "Elevated_Back_Lunge/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Elevated_Cable_Rows",
    "name": "Elevated Cable Rows",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Get a platform of some sort (it can be an aerobics or calf raise platform) that is around 4-6 inches in height.\nPlace it on the seat of the cable row machine.\nSit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked.\nLean over as you keep the natural alignment of your back and grab the V-bar handles.\nWith your arms extended pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lats as you hold the bar in front of you. This is the starting position of the exercise.\nKeeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals. Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Elevated_Cable_Rows/0.jpg",
      "Elevated_Cable_Rows/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "middle back",
      "traps"
    ]
  },
  {
    "id": "Elliptical_Trainer",
    "name": "Elliptical Trainer",
    "category": "cardio",
    "force": null,
    "level": "intermediate",
    "mechanic": null,
    "equipment": "machine",
    "instructions": "To begin, step onto the elliptical and select the desired option from the menu. Most ellipticals have a manual setting, or you can select a program to run. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. Elevation can be adjusted to change the intensity of the workout.\nThe handles can be used to monitor your heart rate to help you stay at an appropriate intensity.",
    "images": [
      "Elliptical_Trainer/0.jpg",
      "Elliptical_Trainer/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Exercise_Ball_Crunch",
    "name": "Exercise Ball Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "exercise ball",
    "instructions": "Lie on an exercise ball with your lower back curvature pressed against the spherical surface of the ball. Your feet should be bent at the knee and pressed firmly against the floor. The upper torso should be hanging off the top of the ball. The arms should either be kept alongside the body or crossed on top of your chest as these positions avoid neck strains (as opposed to the hands behind the back of the head position).\nLower your torso into a stretch position keeping the neck stationary at all times. This will be your starting position.\nWith the hips stationary, flex the waist by contracting the abdominals and curl the shoulders and trunk upward until you feel a nice contraction on your abdominals. The arms should simply slide up the side of your legs if you have them at the side or just stay on top of your chest if you have them crossed. The lower back should always stay in contact with the ball. Exhale as you perform this movement and hold the contraction for a second.\nAs you inhale, go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Exercise_Ball_Crunch/0.jpg",
      "Exercise_Ball_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Exercise_Ball_Pull-In",
    "name": "Exercise Ball Pull-In",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "exercise ball",
    "instructions": "Place an exercise ball nearby and lay on the floor in front of it with your hands on the floor shoulder width apart in a push-up position.\nNow place your lower shins on top of an exercise ball. Tip: At this point your legs should be fully extended with the shins on top of the ball and the upper body should be in a push-up type of position being supported by your two extended arms in front of you. This will be your starting position.\nWhile keeping your back completely straight and the upper body stationary, pull your knees in towards your chest as you exhale, allowing the ball to roll forward under your ankles. Squeeze your abs and hold that position for a second.\nNow slowly straighten your legs, rolling the ball back to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Exercise_Ball_Pull-In/0.jpg",
      "Exercise_Ball_Pull-In/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Extended_Range_One-Arm_Kettlebell_Floor_Press",
    "name": "Extended Range One-Arm Kettlebell Floor Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Lie on the floor and position a kettlebell for one arm to press. The kettlebell should be held by the handle. The leg on the same side that you are pressing should be bent, with the knee crossing over the midline of the body.\nPress the kettlebell by extending the elbow and adducting the arm, pressing it above your body. Return to the starting position.",
    "images": [
      "Extended_Range_One-Arm_Kettlebell_Floor_Press/0.jpg",
      "Extended_Range_One-Arm_Kettlebell_Floor_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "External_Rotation",
    "name": "External Rotation",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie sideways on a flat bench with one arm holding a dumbbell and the other hand on top of the bench folded so that you can rest your head on it.\nBend the elbows of the arm holding the dumbbell so that it creates a 90-degree angle between the upper arm and the forearm. Tip: Keep the arm parallel to your torso.\nNow bend the elbow while keeping the upper arm stationary. In this manner, the forearm will be parallel to the floor and perpendicular to your torso (Tip: So the forearm will be directly in front of you). The upper arm will be stationary by your torso and should be parallel to the floor (aligned with your torso at all times). This will be your starting position.\nAs you breathe out, externally rotate your forearm so that the dumbbell is lifted up in a semicircle motion as you maintain the 90 degree angle bend between the upper arms and the forearm. You will continue this external rotation until the forearm is perpendicular to the floor and the torso pointing towards the ceiling. At this point you will hold the contraction for a second.\nAs you breathe in, slowly go back to the starting position.\nRepeat for the recommended amount of repetitions and then switch to the other arm.",
    "images": [
      "External_Rotation/0.jpg",
      "External_Rotation/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "External_Rotation_with_Band",
    "name": "External Rotation with Band",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "Choke the band around a post. The band should be at the same height as your elbow. Stand with your left side to the band a couple of feet away.\nGrasp the end of the band with your right hand, and keep your elbow pressed firmly to your side. We recommend you hold a pad or foam roll in place with your elbow to keep it firmly in position.\nWith your upper arm in position, your elbow should be flexed to 90 degrees with your hand reaching across the front of your torso. This will be your starting position.\nExecute the movement by rotating your arm in a backhand motion, keeping your elbow in place.\nContinue as far as you are able, pause, and then return to the starting position.",
    "images": [
      "External_Rotation_with_Band/0.jpg",
      "External_Rotation_with_Band/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "External_Rotation_with_Cable",
    "name": "External Rotation with Cable",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Adjust the cable to the same height as your elbow. Stand with your left side to the band a couple of feet away.\nGrasp the handle with your right hand, and keep your elbow pressed firmly to your side. We recommend you hold a pad or foam roll in place with your elbow to keep it firmly in position.\nWith your upper arm in position, your elbow should be flexed to 90 degrees with your hand reaching across the front of your torso. This will be your starting position.\nExecute the movement by rotating your arm in a backhand motion, keeping your elbow in place.",
    "images": [
      "External_Rotation_with_Cable/0.jpg",
      "External_Rotation_with_Cable/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Face_Pull",
    "name": "Face Pull",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Facing a high pulley with a rope or dual handles attached, pull the weight directly towards your face, separating your hands as you do so. Keep your upper arms parallel to the ground.",
    "images": [
      "Face_Pull/0.jpg",
      "Face_Pull/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "middle back"
    ]
  },
  {
    "id": "Finger_Curls",
    "name": "Finger Curls",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Hold a barbell with both hands and your palms facing up; hands spaced about shoulder width.\nPlace your feet flat on the floor, at a distance that is slightly wider than shoulder width apart. This will be your starting position.\nLower the bar as far as possible by extending the fingers. Allowing the bar to roll down the hands, catch the bar with the final joint in the fingers.\nNow curl bar up as high as possible by closing your hands while exhaling. Hold the contraction at the top.",
    "images": [
      "Finger_Curls/0.jpg",
      "Finger_Curls/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Flat_Bench_Cable_Flyes",
    "name": "Flat Bench Cable Flyes",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Position a flat bench between two low pulleys so that when you are laying on it, your chest will be lined up with the cable pulleys.\nLay flat on the bench and keep your feet on the ground.\nHave someone hand you the handles on each hand. You will grab each single handle attachment with a palms up grip.\nExtend your arms by your side with a slight bend on your elbows. Tip: You will keep this bend constant through the whole movement. Your arms should be parallel to the floor. This is your starting position.\nNow start lifting the arms in a semi-circle motion directly in front of you by pulling the cables together until both hands meet at the top of the movement. Squeeze your chest as you perform this motion and breathe out during this movement. Also, hold the contraction for a second at the top. Tip: When performed correctly, at the top position of this movement, your arms should be perpendicular to your torso and the floor touching above your chest.\nSlowly come back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Flat_Bench_Cable_Flyes/0.jpg",
      "Flat_Bench_Cable_Flyes/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Flat_Bench_Leg_Pull-In",
    "name": "Flat Bench Leg Pull-In",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie on an exercise mat or a flat bench with your legs off the end.\nPlace your hands either under your glutes with your palms down or by the sides holding on to the bench (or with palms down by the side on an exercise mat). Also extend your legs straight out. This will be your starting position.\nBend your knees and pull your upper thighs into your midsection as you breathe out. Continue this movement until your knees are near your chest. Hold the contracted position for a second.\nAs you breathe in, slowly return to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Flat_Bench_Leg_Pull-In/0.jpg",
      "Flat_Bench_Leg_Pull-In/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Flat_Bench_Lying_Leg_Raise",
    "name": "Flat Bench Lying Leg Raise",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Lie with your back flat on a bench and your legs extended in front of you off the end.\nPlace your hands either under your glutes with your palms down or by the sides holding on to the bench. This will be your starting position.\nAs you keep your legs extended, straight as possible with your knees slightly bent but locked raise your legs until they make a 90-degree angle with the floor. Exhale as you perform this portion of the movement and hold the contraction at the top for a second.\nNow, as you inhale, slowly lower your legs back down to the starting position.",
    "images": [
      "Flat_Bench_Lying_Leg_Raise/0.jpg",
      "Flat_Bench_Lying_Leg_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Flexor_Incline_Dumbbell_Curls",
    "name": "Flexor Incline Dumbbell Curls",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Hold the dumbbell towards the side farther from you so that you have more weight on the side closest to you. (This can be done for a good effect on all bicep dumbbell exercises). Now do a normal incline dumbbell curl, but keep your wrists as far back as possible so as to neutralize any stress that is placed on them.\nSit on an incline bench that is angled at 45-degrees while holding a dumbbell on each hand.\nLet your arms hang down on your sides, with the elbows in, and turn the palms of your hands forward with the thumbs pointing away from the body. Tip: You will keep this hand position throughout the movement as there should not be any twisting of the hands as they come up. This will be your starting position.\nCurl up the two dumbbells at the same time until your biceps are fully contracted and exhale. Tip: Do not swing the arms or use momentum. Keep a controlled motion at all times. Hold the contracted position for a second at the top.\nAs you inhale, slowly go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Flexor_Incline_Dumbbell_Curls/0.jpg",
      "Flexor_Incline_Dumbbell_Curls/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Floor_Glute-Ham_Raise",
    "name": "Floor Glute-Ham Raise",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": null,
    "instructions": "You can use a partner for this exercise or brace your feet under something stable.\nBegin on your knees with your upper legs and torso upright. If using a partner, they will firmly hold your feet to keep you in position. This will be your starting position.\nLower yourself by extending at the knee, taking care to NOT flex the hips as you go forward.\nPlace your hands in front of you as you reach the floor. This movement is very difficult and you may be unable to do it unaided. Use your arms to lightly push off the floor to aid your return to the starting position.",
    "images": [
      "Floor_Glute-Ham_Raise/0.jpg",
      "Floor_Glute-Ham_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes"
    ]
  },
  {
    "id": "Floor_Press",
    "name": "Floor Press",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Adjust the j-hooks so they are at the appropriate height to rack the bar. Begin lying on the floor with your head near the end of a power rack. Keeping your shoulder blades pulled together; pull the bar off of the hooks.\nLower the bar towards the bottom of your chest or upper stomach, squeezing the bar and attempting to pull it apart as you do so. Ensure that you tuck your elbows throughout the movement. Lower the bar until your upper arm contacts the ground and pause, preventing any slamming or bouncing of the weight.\nPress the bar back up as fast as you can, keeping the bar, your wrists, and elbows in line as you do so.",
    "images": [
      "Floor_Press/0.jpg",
      "Floor_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Floor_Press_with_Chains",
    "name": "Floor Press with Chains",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Adjust the j-hooks so they are at the appropriate height to rack the bar. For this exercise, drape the chains directly over the end of the bar, trying to keep the ends away from the plates.\nBegin lying on the floor with your head near the end of a power rack. Keeping your shoulder blades pulled together, pull the bar off of the hooks.\nLower the bar towards the bottom of your chest or upper stomach, squeezing the bar and attempting to pull it apart as you do so. Ensure that you tuck your elbows throughout the movement. Lower the bar until your upper arm contacts the ground and pause, preventing any slamming or bouncing of the weight.\nPress the bar back up as fast as you can, keeping the bar, your wrists, and elbows in line as you do so.",
    "images": [
      "Floor_Press_with_Chains/0.jpg",
      "Floor_Press_with_Chains/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Flutter_Kicks",
    "name": "Flutter Kicks",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "On a flat bench lie facedown with the hips on the edge of the bench, the legs straight with toes high off the floor and with the arms on top of the bench holding on to the front edge.\nSqueeze your glutes and hamstrings and straighten the legs until they are level with the hips. This will be your starting position.\nStart the movement by lifting the left leg higher than the right leg.\nThen lower the left leg as you lift the right leg.\nContinue alternating in this manner (as though you are doing a flutter kick in water) until you have done the recommended amount of repetitions for each leg. Make sure that you keep a controlled movement at all times. Tip: You will breathe normally as you perform this movement.",
    "images": [
      "Flutter_Kicks/0.jpg",
      "Flutter_Kicks/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings"
    ]
  },
  {
    "id": "Freehand_Jump_Squat",
    "name": "Freehand Jump Squat",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Cross your arms over your chest.\nWith your head up and your back straight, position your feet at shoulder width.\nKeeping your back straight and chest up, squat down as you inhale until your upper thighs are parallel, or lower, to the floor.\nNow pressing mainly with the ball of your feet, jump straight up in the air as high as possible, using the thighs like springs. Exhale during this portion of the movement.\nWhen you touch the floor again, immediately squat down and jump again.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Freehand_Jump_Squat/0.jpg",
      "Freehand_Jump_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Frog_Sit-Ups",
    "name": "Frog Sit-Ups",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Lie with your back flat on the floor (or exercise mat) and your legs extended in front of you.\nNow bend at the knees and place your outer thighs by the floor (or mat) as you make the soles of your feet touch each other.\nNow try pushing both soles and bringing them up as near you as possible while you keep the outer thighs on the floor (or at least almost touching it). Tip: In this position your legs should create a diamond shape.\nNow, cross your arms in front of you by touching the opposite shoulders. This will be your starting position.\nAs you exhale flatten your lower back to the floor while curling the torso upwards. Tip: This will be like performing the first 1/4 movement of a sit up. Hold at the top position for a second.\nAs you inhale, slowly lower back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Frog_Sit-Ups/0.jpg",
      "Frog_Sit-Ups/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Front_Barbell_Squat",
    "name": "Front Barbell Squat",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, bring your arms up under the bar while keeping the elbows high and the upper arm slightly above parallel to the floor. Rest the bar on top of the deltoids and cross your arms while grasping the bar for total control.\nLift the bar off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section).\nBegin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the bar as you exhale by pushing the floor mainly with the middle of your foot as you straighten the legs again and go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Front_Barbell_Squat/0.jpg",
      "Front_Barbell_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Front_Barbell_Squat_To_A_Bench",
    "name": "Front Barbell Squat To A Bench",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set a flat bench behind you and set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, bring your arms up under the bar while keeping the elbows high and the upper arm slightly above parallel to the floor. Rest the bar on top of the deltoids and cross your arms while grasping the bar for total control.\nLift the bar off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section).\nBegin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until you touch the bench with your glutes. Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the bar as you exhale by pushing the floor mainly with the heel of your foot as you straighten the legs again and go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Front_Barbell_Squat_To_A_Bench/0.jpg",
      "Front_Barbell_Squat_To_A_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Front_Cable_Raise",
    "name": "Front Cable Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Select the weight on a low pulley machine and grasp the single hand cable attachment that is attached to the low pulley with your left hand.\nFace away from the pulley and put your arm straight down with the hand cable attachment in front of your thighs at arms' length with the palms of the hand facing your thighs. This will be your starting position.\nWhile maintaining the torso stationary (no swinging), lift the left arm to the front with a slight bend on the elbow and the palms of the hand always faces down. Continue to go up until you arm is slightly above parallel to the floor. Exhale as you execute this portion of the movement and pause for a second at the top.\nNow as you inhale lower the arm back down slowly to the starting position.\nOnce all of the recommended amount of repetitions have been performed for this arm, switch arms and perform the exercise with the right one.",
    "images": [
      "Front_Cable_Raise/0.jpg",
      "Front_Cable_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Front_Dumbbell_Raise",
    "name": "Front Dumbbell Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Pick a couple of dumbbells and stand with a straight torso and the dumbbells on front of your thighs at arms length with the palms of the hand facing your thighs. This will be your starting position.\nWhile maintaining the torso stationary (no swinging), lift the left dumbbell to the front with a slight bend on the elbow and the palms of the hands always facing down. Continue to go up until you arm is slightly above parallel to the floor. Exhale as you execute this portion of the movement and pause for a second at the top. Inhale after the second pause.\nNow lower the dumbbell back down slowly to the starting position as you simultaneously lift the right dumbbell.\nContinue alternating in this fashion until all of the recommended amount of repetitions have been performed for each arm.",
    "images": [
      "Front_Dumbbell_Raise/0.jpg",
      "Front_Dumbbell_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Front_Incline_Dumbbell_Raise",
    "name": "Front Incline Dumbbell Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit down on an incline bench with the incline set anywhere between 30 to 60 degrees while holding a dumbbell on each hand. Tip: You can change the angle to hit the muscle a little differently each time.\nExtend your arms straight in front of you and have your palms facing down with the dumbbells raised about 1 inch above your thighs. This will be your starting position.\nSlowly raise the dumbbells straight up until they are slightly above your shoulders, while keeping your elbows locked. Squeeze at the top for a second and make sure you breathe out during this portion of the movement. Tip: Keep your head resting down against the bench and your legs on the floor at all times.\nLower the arms back to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Front_Incline_Dumbbell_Raise/0.jpg",
      "Front_Incline_Dumbbell_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Front_Plate_Raise",
    "name": "Front Plate Raise",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "While standing straight, hold a barbell plate in both hands at the 3 and 9 o'clock positions. Your palms should be facing each other and your arms should be extended and locked with a slight bend at the elbows and the plate should be down near your waist in front of you as far as you can go. Tip: The arms will remain in this position throughout the exercise. This will be your starting position.\nSlowly raise the plate as you exhale until it is a little above shoulder level. Hold the contraction for a second. Tip: make sure that you do not swing the weight or bend at the elbows. Your torso should remain stationary throughout the movement as well.\nAs you inhale, slowly lower the plate back down to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Front_Plate_Raise/0.jpg",
      "Front_Plate_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Front_Raise_And_Pullover",
    "name": "Front Raise And Pullover",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie on a flat bench while holding a barbell using a palms down grip that is about 15 inches apart.\nPlace the bar on your upper thighs, extend your arms and lock them while keeping a slight bend on the elbows. This will be your starting position.\nNow raise the weight using a semicircular motion and keeping your arms straight as you inhale. Continue the same movement until the bar is on the other side above your head . (Tip: the bar will travel approximately 180-degrees). At this point your arms should be parallel to the floor with the palms of your hands facing the ceiling.\nNow return the barbell to the starting position by reversing the motion as you exhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Front_Raise_And_Pullover/0.jpg",
      "Front_Raise_And_Pullover/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "lats",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Front_Squat_Clean_Grip",
    "name": "Front Squat (Clean Grip)",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "To begin, first set the bar in a rack slightly below shoulder level. Rest the bar on top of the deltoids, pushing into the clavicles, and lightly touching the throat. Your hands should be in a clean grip, touching the bar only with your fingers to help keep it in position.\nLift the bar off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head and elbows up at all times. This will be your starting position.\nBend at the knees, sitting down between your legs. Continue down until your hamstrings are on your calves. Keep your knees aligned with your feet by consciously using your abductors to push your knees out as you squat.\nBegin to raise the bar as you exhale by pushing the floor mainly with the heel or middle of your foot as you straighten the legs again and return to the starting position.",
    "images": [
      "Front_Squat_Clean_Grip/0.jpg",
      "Front_Squat_Clean_Grip/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "abdominals",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Front_Squats_With_Two_Kettlebells",
    "name": "Front Squats With Two Kettlebells",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so.\nLooking straight ahead at all times, squat as low as you can and pause at the bottom. As you squat down, push your knees out. You should squat between your legs, keeping an upright torso, with your head and chest up.\nRise back up by driving through your heels and repeat.",
    "images": [
      "Front_Squats_With_Two_Kettlebells/0.jpg",
      "Front_Squats_With_Two_Kettlebells/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes"
    ]
  },
  {
    "id": "Front_Two-Dumbbell_Raise",
    "name": "Front Two-Dumbbell Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Pick a couple of dumbbells and stand with a straight torso and the dumbbells on front of your thighs at arms length with the palms of the hand facing your thighs. This will be your starting position.\nWhile maintaining the torso stationary (no swinging), lift the dumbbells to the front with a slight bend on the elbow and the palms of the hands always facing down. Continue to go up until you arms are slightly above parallel to the floor. Exhale as you execute this portion of the movement and pause for a second at the top.\nAs you inhale, lower the dumbbells back down slowly to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Front_Two-Dumbbell_Raise/0.jpg",
      "Front_Two-Dumbbell_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Full_Range-Of-Motion_Lat_Pulldown",
    "name": "Full Range-Of-Motion Lat Pulldown",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Either standing or seated on a high bench, grasp two stirrup cables that are attached to the high pulleys. Grab with the opposing hand so your arms are crisscrossed about you and your palms are facing forward.\nKeeping your chest up and maintaining a slight arch in your lower back, pull the handles down as if you were doing a regular pulldown. The range of motion will be more of an arc. During the movement, rotate your hands so that in the bottom position your palms face each other rather than forward. Return slowly to the starting position and repeat.",
    "images": [
      "Full_Range-Of-Motion_Lat_Pulldown/0.jpg",
      "Full_Range-Of-Motion_Lat_Pulldown/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Gironda_Sternum_Chins",
    "name": "Gironda Sternum Chins",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Grasp the pull-up bar with a shoulder width underhand grip.\nNow hang with your arms fully extended and stick your chest out and lean back. Tip: You will be leaning back throughout the entire movement. This will be your starting position.\nStart pulling yourself towards the bar with your spine arched throughout the movement and your head leaning back as far away from the bar as possible. Exhale as you perform this portion of the movement. Tip: At the upper end of the movement, your hips and legs will be at about a 45-degree angle to the floor.\nKeep pulling until your collarbone passes the bar and your lower chest or sternum area touches it. Hold that contraction for a second. Tip: By the time you've completed this portion of the movement; your head will be parallel to the floor.\nSlowly start going back to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Gironda_Sternum_Chins/0.jpg",
      "Gironda_Sternum_Chins/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back"
    ]
  },
  {
    "id": "Glute_Ham_Raise",
    "name": "Glute Ham Raise",
    "category": "powerlifting",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Begin by adjusting the equipment to fit your body. Place your feet against the footplate in between the rollers as you lie facedown. Your knees should be just behind the pad.\nStart from the bottom of the movement. Keep your back arched as you begin the movement by flexing the knees. Drive your toes into the foot plate as you do so. Keep your upper body straight, and continue until your body is upright.\nReturn to the starting position, keeping your descent under control.",
    "images": [
      "Glute_Ham_Raise/0.jpg",
      "Glute_Ham_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes"
    ]
  },
  {
    "id": "Glute_Kickback",
    "name": "Glute Kickback",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Kneel on the floor or an exercise mat and bend at the waist with your arms extended in front of you (perpendicular to the torso) in order to get into a kneeling push-up position but with the arms spaced at shoulder width. Your head should be looking forward and the bend of the knees should create a 90-degree angle between the hamstrings and the calves. This will be your starting position.\nAs you exhale, lift up your right leg until the hamstrings are in line with the back while maintaining the 90-degree angle bend. Contract the glutes throughout this movement and hold the contraction at the top for a second. Tip: At the end of the movement the upper leg should be parallel to the floor while the calf should be perpendicular to it.\nGo back to the initial position as you inhale and now repeat with the left leg.\nContinue to alternate legs until all of the recommended repetitions have been performed.",
    "images": [
      "Glute_Kickback/0.jpg",
      "Glute_Kickback/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings"
    ]
  },
  {
    "id": "Goblet_Squat",
    "name": "Goblet Squat",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Stand holding a light kettlebell by the horns close to your chest. This will be your starting position.\nSquat down between your legs until your hamstrings are on your calves. Keep your chest and head up and your back straight.\nAt the bottom position, pause and use your elbows to push your knees out. Return to the starting position, and repeat for 10-20 repetitions.",
    "images": [
      "Goblet_Squat/0.jpg",
      "Goblet_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "shoulders"
    ]
  },
  {
    "id": "Good_Morning",
    "name": "Good Morning",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin with a bar on a rack at shoulder height. Rack the bar across the rear of your shoulders as you would a power squat, not on top of your shoulders. Keep your back tight, shoulder blades pinched together, and your knees slightly bent. Step back from the rack.\nBegin by bending at the hips, moving them back as you bend over to near parallel. Keep your back arched and your cervical spine in proper alignment.\nReverse the motion by extending through the hips with your glutes and hamstrings. Continue until you have returned to the starting position.",
    "images": [
      "Good_Morning/0.jpg",
      "Good_Morning/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "abdominals",
      "glutes",
      "lower back"
    ]
  },
  {
    "id": "Good_Morning_off_Pins",
    "name": "Good Morning off Pins",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin with a bar on a rack at about the same height as your stomach. Bend over underneath the bar and rack the bar across the rear of your shoulders as you would a power squat, not on top of your shoulders. At the proper height, you should be near parallel to the floor when bent over. Keep your back tight, shoulder blades pinched together, and your knees slightly bent. Keep your back arched and your cervical spine in proper alignment.\nBegin the motion by extending through the hips with your glutes and hamstrings, and you are standing with the weight. Slowly lower the weight back to the pins returning to the starting position.",
    "images": [
      "Good_Morning_off_Pins/0.jpg",
      "Good_Morning_off_Pins/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "abdominals",
      "glutes",
      "lower back"
    ]
  },
  {
    "id": "Gorilla_Chin_Crunch",
    "name": "Gorilla Chin/Crunch",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Hang from a chin-up bar using an underhand grip (palms facing you) that is slightly wider than shoulder width.\nNow bend your knees at a 90 degree angle so that the calves are parallel to the floor while the thighs remain perpendicular to it. This will be your starting position.\nAs you exhale, pull yourself up while crunching your knees up at the same time until your knees are at chest level. You will stop going up as soon as your nose is at the same level as the bar. Tip: When you get to this point you should also be finishing the crunch at the same time.\nSlowly start to inhale as you return to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Gorilla_Chin_Crunch/0.jpg",
      "Gorilla_Chin_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Hack_Squat",
    "name": "Hack Squat",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Place the back of your torso against the back pad of the machine and hook your shoulders under the shoulder pads provided.\nPosition your legs in the platform using a shoulder width medium stance with the toes slightly pointed out. Tip: Keep your head up at all times and also maintain the back on the pad at all times.\nPlace your arms on the side handles of the machine and disengage the safety bars (which on most designs is done by moving the side handles from a facing front position to a diagonal position).\nNow straighten your legs without locking the knees. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section).\nBegin to slowly lower the unit by bending the knees as you maintain a straight posture with the head up (back on the pad at all times). Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the unit as you exhale by pushing the floor with mainly with the heel of your foot as you straighten the legs again and go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Hack_Squat/0.jpg",
      "Hack_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Hammer_Curls",
    "name": "Hammer Curls",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso.\nThe palms of the hands should be facing your torso. This will be your starting position.\nNow, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm.\nAfter the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Hammer_Curls/0.jpg",
      "Hammer_Curls/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Hammer_Grip_Incline_DB_Bench_Press",
    "name": "Hammer Grip Incline DB Bench Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Lie back on an incline bench with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other.\nBy using your thighs to help you get the dumbbells up, clean the dumbbells one arm at a time so that you can hold them at shoulder width.\nOnce at shoulder width, keep the palms of your hands with a neutral grip (palms facing each other). Keep your elbows flared out with the upper arms in line with the shoulders (perpendicular to the torso) and the elbows bent creating a 90-degree angle between the upper arm and the forearm. This will be your starting position.\nNow bring down the weights slowly to your side as you breathe in. Keep full control of the dumbbells at all times.\nAs you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the dumbbells back in your thighs and then on the floor. This is the safest manner to dispose of the dumbbells.",
    "images": [
      "Hammer_Grip_Incline_DB_Bench_Press/0.jpg",
      "Hammer_Grip_Incline_DB_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Handstand_Push-Ups",
    "name": "Handstand Push-Ups",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "With your back to the wall bend at the waist and place both hands on the floor at shoulder width.\nKick yourself up against the wall with your arms straight. Your body should be upside down with the arms and legs fully extended. Keep your whole body as straight as possible. Tip: If doing this for the first time, have a spotter help you. Also, make sure that you keep facing the wall with your head, rather than looking down.\nSlowly lower yourself to the ground as you inhale until your head almost touches the floor. Tip: It is of utmost importance that you come down slow in order to avoid head injury.\nPush yourself back up slowly as you exhale until your elbows are nearly locked.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Handstand_Push-Ups/0.jpg",
      "Handstand_Push-Ups/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Hanging_Bar_Good_Morning",
    "name": "Hanging Bar Good Morning",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin with a bar on a rack at about the same height as your stomach. Suspend the bar using chains or suspension straps.\nBend over underneath the bar and rack the bar across the rear of your shoulders as you would a power squat, not on top of your traps. At the proper height, you should be near parallel to the floor when bent over. Keep your back tight, shoulder blades pinched together, and your knees slightly bent. Keep your back arched and your cervical spine in proper alignment.\nBegin the motion by extending through the hips with your glutes and hamstrings, and you are standing with the weight.\nSlowly lower the weight back to the starting position, where it is supported by the chains.",
    "images": [
      "Hanging_Bar_Good_Morning/0.jpg",
      "Hanging_Bar_Good_Morning/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "abdominals",
      "glutes",
      "lower back"
    ]
  },
  {
    "id": "Hanging_Leg_Raise",
    "name": "Hanging Leg Raise",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Hang from a chin-up bar with both arms extended at arms length in top of you using either a wide grip or a medium grip. The legs should be straight down with the pelvis rolled slightly backwards. This will be your starting position.\nRaise your legs until the torso makes a 90-degree angle with the legs. Exhale as you perform this movement and hold the contraction for a second or so.\nGo back slowly to the starting position as you breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Hanging_Leg_Raise/0.jpg",
      "Hanging_Leg_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Hanging_Pike",
    "name": "Hanging Pike",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Hang from a chin-up bar with your legs and feet together using an overhand grip (palms facing away from you) that is slightly wider than shoulder width. Tip: You may use wrist wraps in order to facilitate holding on to the bar.\nNow bend your knees at a 90 degree angle and bring the upper legs forward so that the calves are perpendicular to the floor while the thighs remain parallel to it. This will be your starting position.\nPull your legs up as you exhale until you almost touch your shins with the bar above you. Tip: Try to straighten your legs as much as possible while at the top.\nLower your legs as slowly as possible until you reach the starting position. Tip: Avoid swinging and using momentum at all times.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Hanging_Pike/0.jpg",
      "Hanging_Pike/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "High_Cable_Curls",
    "name": "High Cable Curls",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Stand between a couple of high pulleys and grab a handle in each arm. Position your upper arms in a way that they are parallel to the floor with the palms of your hands facing you. This will be your starting position.\nCurl the handles towards you until they are next to your ears. Make sure that as you do so you flex your biceps and exhale. The upper arms should remain stationary and only the forearms should move. Hold for a second in the contracted position as you squeeze the biceps.\nSlowly bring back the arms to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "High_Cable_Curls/0.jpg",
      "High_Cable_Curls/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Hip_Extension_with_Bands",
    "name": "Hip Extension with Bands",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "Secure one end of the band to the lower portion of a post and attach the other to one ankle.\nFacing the attachment point of the band, hold on to the column to stabilize yourself.\nKeeping your head and your chest up, move the resisted leg back as far as you can while keeping the knee straight.\nReturn the leg to the starting position.",
    "images": [
      "Hip_Extension_with_Bands/0.jpg",
      "Hip_Extension_with_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings"
    ]
  },
  {
    "id": "Hip_Flexion_with_Band",
    "name": "Hip Flexion with Band",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "Secure one end of the band to the lower portion of a post and attach the other to one ankle.\nFace away from the attachment point of the band.\nKeeping your head and your chest up, raise your knee up to 90 degrees and pause.\nReturn the leg to the starting position.",
    "images": [
      "Hip_Flexion_with_Band/0.jpg",
      "Hip_Flexion_with_Band/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Hip_Lift_with_Band",
    "name": "Hip Lift with Band",
    "category": "powerlifting",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "After choosing a suitable band, lay down in the middle of the rack, after securing the band on either side of you. If your rack doesn't have pegs, the band can be secured using heavy dumbbells or similar objects, just ensure they won't move.\nAdjust your position so that the band is directly over your hips. Bend your knees and place your feet flat on the floor. Your hands can be on the floor or holding the band in position.\nKeeping your shoulders on the ground, drive through your heels to raise your hips, pushing into the band as high as you can.\nPause at the top of the motion, and return to the starting position.",
    "images": [
      "Hip_Lift_with_Band/0.jpg",
      "Hip_Lift_with_Band/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "calves",
      "hamstrings"
    ]
  },
  {
    "id": "Hyperextensions_Back_Extensions",
    "name": "Hyperextensions (Back Extensions)",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Lie face down on a hyperextension bench, tucking your ankles securely under the footpads.\nAdjust the upper pad if possible so your upper thighs lie flat across the wide pad, leaving enough room for you to bend at the waist without any restriction.\nWith your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms.\nStart bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you feel a nice stretch on the hamstrings and you can no longer keep going without a rounding of the back. Tip: Never round the back as you perform this exercise. Also, some people can go farther than others. The key thing is that you go as far as your body allows you to without rounding the back.\nSlowly raise your torso back to the initial position as you inhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Hyperextensions_Back_Extensions/0.jpg",
      "Hyperextensions_Back_Extensions/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Hyperextensions_With_No_Hyperextension_Bench",
    "name": "Hyperextensions With No Hyperextension Bench",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "With someone holding down your legs, slide yourself down to the edge a flat bench until your hips hang off the end of the bench. Tip: Your entire upper body should be hanging down towards the floor. Also, you will be in the same position as if you were on a hyperextension bench but the range of motion will be shorter due to the height of the flat bench vs. that of the hyperextension bench.\nWith your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms.\nStart bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you almost touch the floor or you feel a nice stretch on the hamstrings (whichever comes first). Tip: Never round the back as you perform this exercise.\nSlowly raise your torso back to the initial position as you exhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Hyperextensions_With_No_Hyperextension_Bench/0.jpg",
      "Hyperextensions_With_No_Hyperextension_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Incline_Barbell_Triceps_Extension",
    "name": "Incline Barbell Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Hold a barbell with an overhand grip (palms down) that is a little closer together than shoulder width.\nLie back on an incline bench set at any angle between 45-75-degrees.\nBring the bar overhead with your arms extended and elbows in. The arms should be in line with the torso above the head. This will be your starting position.\nNow lower the bar in a semicircular motion behind your head until your forearms touch your biceps. Inhale as you perform this movement. Tip: Keep your upper arms stationary and close to your head at all times. Only the forearms should move.\nReturn to the starting position as you breathe out and you contract the triceps. Hold the contraction for a second.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Incline_Barbell_Triceps_Extension/0.jpg",
      "Incline_Barbell_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Incline_Bench_Pull",
    "name": "Incline Bench Pull",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Grab a dumbbell in each hand and lie face down on an incline bench that is set to an incline that is approximately 30 degrees.\nLet the arms hang to your sides fully extended as they point to the floor.\nTurn the wrists until your hands have a pronated (palms down) grip.\nNow flare the elbows out. This will be your starting position.\nAs you breathe out, start to pull the dumbbells up as if you are doing a reverse bench press. You will do this by bending at the elbows and bringing the upper arms up as you let the forearms hang. Continue this motion until the upper arms are at the same level as your back. Tip: The elbows will come out to the side and your upper arms and torso should make the letter \"T\" at the top of the movement. Hold the contraction at the top for a second.\nSlowly go back down to the starting position as you breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Incline_Bench_Pull/0.jpg",
      "Incline_Bench_Pull/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "Incline_Cable_Chest_Press",
    "name": "Incline Cable Chest Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Adjust the weight to an appropriate amount and be seated, grasping the handles. Your upper arms should be about 45 degrees to the body, with your head and chest up. The elbows should be bent to about 90 degrees. This will be your starting position.\nBegin by extending through the elbow, pressing the handles together straight in front of you. Keep your shoulder blades retracted as you execute the movement.\nAfter pausing at full extension, return to the starting position, keeping tension on the cables.",
    "images": [
      "Incline_Cable_Chest_Press/0.jpg",
      "Incline_Cable_Chest_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Incline_Cable_Flye",
    "name": "Incline Cable Flye",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "To get yourself into the starting position, set the pulleys at the floor level (lowest level possible on the machine that is below your torso).\nPlace an incline bench (set at 45 degrees) in between the pulleys, select a weight on each one and grab a pulley on each hand.\nWith a handle on each hand, lie on the incline bench and bring your hands together at arms length in front of your face. This will be your starting position.\nWith a slight bend of your elbows (in order to prevent stress at the biceps tendon), lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary. The movement should only occur at the shoulder joint.\nReturn your arms back to the starting position as you squeeze your chest muscles and exhale. Hold the contracted position for a second. Tip: Make sure to use the same arc of motion used to lower the weights.\nRepeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Incline_Cable_Flye/0.jpg",
      "Incline_Cable_Flye/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Incline_Dumbbell_Bench_With_Palms_Facing_In",
    "name": "Incline Dumbbell Bench With Palms Facing In",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Lie back on an incline bench with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other.\nBy using your thighs to help you get the dumbbells up, clean the dumbbells one arm at a time so that you can hold them at shoulder width.\nOnce at shoulder width, keep the palms of your hands with a neutral grip (palms facing each other). Keep your elbows flared out with the upper arms in line with the shoulders (perpendicular to the torso) and the elbows bent creating a 90-degree angle between the upper arm and the forearm. This will be your starting position.\nNow bring down the weights slowly to your side as you breathe in. Keep full control of the dumbbells at all times.\nAs you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the dumbbells back in your thighs and then on the floor. This is the safest manner to dispose of the dumbbells.",
    "images": [
      "Incline_Dumbbell_Bench_With_Palms_Facing_In/0.jpg",
      "Incline_Dumbbell_Bench_With_Palms_Facing_In/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Incline_Dumbbell_Curl",
    "name": "Incline Dumbbell Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit back on an incline bench with a dumbbell in each hand held at arms length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. This will be your starting position.\nWhile holding the upper arm stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second.\nSlowly begin to bring the dumbbells back to starting position as your breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Incline_Dumbbell_Curl/0.jpg",
      "Incline_Dumbbell_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Incline_Dumbbell_Flyes",
    "name": "Incline Dumbbell Flyes",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Hold a dumbbell on each hand and lie on an incline bench that is set to an incline angle of no more than 30 degrees.\nExtend your arms above you with a slight bend at the elbows.\nNow rotate the wrists so that the palms of your hands are facing you. Tip: The pinky fingers should be next to each other. This will be your starting position.\nAs you breathe in, start to slowly lower the arms to the side while keeping the arms extended and while rotating the wrists until the palms of the hand are facing each other. Tip: At the end of the movement the arms will be by your side with the palms facing the ceiling.\nAs you exhale start to bring the dumbbells back up to the starting position by reversing the motion and rotating the hands so that the pinky fingers are next to each other again. Tip: Keep in mind that the movement will only happen at the shoulder joint and at the wrist. There is no motion that happens at the elbow joint.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Incline_Dumbbell_Flyes/0.jpg",
      "Incline_Dumbbell_Flyes/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Incline_Dumbbell_Flyes_-_With_A_Twist",
    "name": "Incline Dumbbell Flyes - With A Twist",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Hold a dumbbell in each hand and lie on an incline bench that is set to an incline angle of no more than 30 degrees.\nExtend your arms above you with a slight bend at the elbows.\nNow rotate the wrists so that the palms of your hands are facing you. Tip: The pinky fingers should be next to each other. This will be your starting position.\nAs you breathe in, start to slowly lower the arms to the side while keeping the arms extended and while rotating the wrists until the palms of the hand are facing each other. Tip: At the end of the movement the arms will be by your side with the palms facing the ceiling.\nAs you exhale start to bring the dumbbells back up to the starting position by reversing the motion and rotating the hands so that the pinky fingers are next to each other again. Tip: Keep in mind that the movement will only happen at the shoulder joint and at the wrist. There is no motion that happens at the elbow joint.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Incline_Dumbbell_Flyes_-_With_A_Twist/0.jpg",
      "Incline_Dumbbell_Flyes_-_With_A_Twist/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Incline_Dumbbell_Press",
    "name": "Incline Dumbbell Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Lie back on an incline bench with a dumbbell in each hand atop your thighs. The palms of your hands will be facing each other.\nThen, using your thighs to help push the dumbbells up, lift the dumbbells one at a time so that you can hold them at shoulder width.\nOnce you have the dumbbells raised to shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position.\nBe sure to keep full control of the dumbbells at all times. Then breathe out and push the dumbbells up with your chest.\nLock your arms at the top, hold for a second, and then start slowly lowering the weight. Tip Ideally, lowering the weights should take about twice as long as raising them.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the dumbbells back on your thighs and then on the floor. This is the safest manner to release the dumbbells.",
    "images": [
      "Incline_Dumbbell_Press/0.jpg",
      "Incline_Dumbbell_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Incline_Hammer_Curls",
    "name": "Incline Hammer Curls",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position.\nInitiate the movement by flexing at the elbow, attempting to keep the upper arm stationary.\nContinue to the top of the movement and pause, then slowly return to the start position.",
    "images": [
      "Incline_Hammer_Curls/0.jpg",
      "Incline_Hammer_Curls/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Incline_Inner_Biceps_Curl",
    "name": "Incline Inner Biceps Curl",
    "category": "strength",
    "force": null,
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Hold a dumbbell in each hand and lie back on an incline bench.\nThe dumbbells should be at arm's length hanging at your sides and your palms should be facing out. This will be your starting position.\nNow as you exhale curl the weight outward and up while keeping your forearms in line with your side deltoids. Continue the curl until the dumbbells are at shoulder height and to the sides of your deltoids. Tip: The end of the movement should look similar to a double biceps pose.\nAfter a second contraction at the top of the movement, start to inhale and slowly lower the weights back to the starting position using the same path used to bring them up.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Incline_Inner_Biceps_Curl/0.jpg",
      "Incline_Inner_Biceps_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Incline_Push-Up",
    "name": "Incline Push-Up",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Stand facing bench or sturdy elevated platform. Place hands on edge of bench or platform, slightly wider than shoulder width.\nPosition forefoot back from bench or platform with arms and body straight. Arms should be perpendicular to body. Keeping body straight, lower chest to edge of box or platform by bending arms.\nPush body up until arms are extended. Repeat.",
    "images": [
      "Incline_Push-Up/0.jpg",
      "Incline_Push-Up/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Incline_Push-Up_Close-Grip",
    "name": "Incline Push-Up Close-Grip",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Stand facing a Smith machine bar or sturdy elevated platform at an appropriate height.\nPlace your hands next to one another on the bar.\nPosition your feet back from the bar with arms and body straight. This will be your starting position.\nKeeping your body straight, lower your chest to the bar by bending the arms.\nReturn to the starting position by extending the elbows, pressing yourself back up.",
    "images": [
      "Incline_Push-Up_Close-Grip/0.jpg",
      "Incline_Push-Up_Close-Grip/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Incline_Push-Up_Medium",
    "name": "Incline Push-Up Medium",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Stand facing a Smith machine bar or sturdy elevated platform at an appropriate height.\nPlace your hands on the bar, with your hands about shoulder width apart.\nPosition your feet back from the bar with arms and body straight. This will be your starting position.\nKeeping your body straight, lower your chest to the bar by bending the arms.\nReturn to the starting position by extending the elbows, pressing yourself back up.",
    "images": [
      "Incline_Push-Up_Medium/0.jpg",
      "Incline_Push-Up_Medium/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "abdominals",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Incline_Push-Up_Reverse_Grip",
    "name": "Incline Push-Up Reverse Grip",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Stand facing a Smith machine bar or sturdy elevated platform at an appropriate height.\nPlace your hands on the bar palms up, with your hands about shoulder width apart.\nPosition your feet back from the bar with arms and body straight. This will be your starting position.\nKeeping your body straight, lower your chest to the bar by bending the arms.\nReturn to the starting position by extending the elbows, pressing yourself back up.",
    "images": [
      "Incline_Push-Up_Reverse_Grip/0.jpg",
      "Incline_Push-Up_Reverse_Grip/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "abdominals",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Incline_Push-Up_Wide",
    "name": "Incline Push-Up Wide",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Stand facing a Smith machine bar or sturdy elevated platform at an appropriate height.\nPlace your hands on the bar, with your hands wider than shoulder width.\nPosition your feet back from the bar with arms and body straight. Your arms should be perpendicular to the body. This will be your starting position.\nKeeping your body straight, lower your chest to the bar by bending the arms.\nReturn to the starting position by extending the elbows, pressing yourself back up.",
    "images": [
      "Incline_Push-Up_Wide/0.jpg",
      "Incline_Push-Up_Wide/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "abdominals",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Internal_Rotation_with_Band",
    "name": "Internal Rotation with Band",
    "category": "strength",
    "force": null,
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "bands",
    "instructions": "Choke the band around a post. The band should be at the same height as your elbow. Stand with your right side to the band a couple of feet away.\nGrasp the end of the band with your right hand, and keep your elbow pressed firmly to your side. We recommend you hold a pad or foam roll in place with your elbow to keep it firmly in position.\nWith your upper arm in position, your elbow should be flexed to 90 degrees with your hand reaching away from your torso. This will be your starting position.\nExecute the movement by rotating your arm in a forehand motion, keeping your elbow in place.\nContinue as far as you are able, pause, and then return to the starting position.",
    "images": [
      "Internal_Rotation_with_Band/0.jpg",
      "Internal_Rotation_with_Band/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Inverted_Row",
    "name": "Inverted Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": null,
    "instructions": "Position a bar in a rack to about waist height. You can also use a smith machine.\nTake a wider than shoulder width grip on the bar and position yourself hanging underneath the bar. Your body should be straight with your heels on the ground with your arms fully extended. This will be your starting position.\nBegin by flexing the elbow, pulling your chest towards the bar. Retract your shoulder blades as you perform the movement.\nPause at the top of the motion, and return yourself to the start position.\nRepeat for the desired number of repetitions.",
    "images": [
      "Inverted_Row/0.jpg",
      "Inverted_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "lats"
    ]
  },
  {
    "id": "Inverted_Row_with_Straps",
    "name": "Inverted Row with Straps",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Hang a rope or suspension straps from a rack or other stable object. Grasp the ends and position yourself in a supine position hanging from the ropes. Your body should be straight with your heels on the ground with your arms fully extended. This will be your starting position.\nBegin by flexing the elbow, pulling your chest to your hands. Retract your shoulder blades as you perform the movement.\nPause at the top of the motion, and return yourself to the start position.\nRepeat for the desired number of repetitions.",
    "images": [
      "Inverted_Row_with_Straps/0.jpg",
      "Inverted_Row_with_Straps/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Iron_Cross",
    "name": "Iron Cross",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "",
    "images": [
      "Iron_Cross/0.jpg",
      "Iron_Cross/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "chest",
      "glutes",
      "hamstrings",
      "lower back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Isometric_Neck_Exercise_-_Front_And_Back",
    "name": "Isometric Neck Exercise - Front And Back",
    "category": "strength",
    "force": "static",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "With your head and neck in a neutral position (normal position with head erect facing forward), place both of your hands on the front side of your head.\nNow gently push forward as you contract the neck muscles but resisting any movement of your head. Start with slow tension and increase slowly. Keep breathing normally as you execute this contraction.\nHold for the recommended number of seconds.\nNow release the tension slowly.\nRest for the recommended amount of time and repeat with your hands placed on the back side of your head.",
    "images": [
      "Isometric_Neck_Exercise_-_Front_And_Back/0.jpg",
      "Isometric_Neck_Exercise_-_Front_And_Back/1.jpg"
    ],
    "primaryMuscles": [
      "neck"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Isometric_Neck_Exercise_-_Sides",
    "name": "Isometric Neck Exercise - Sides",
    "category": "strength",
    "force": "static",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "With your head and neck in a neutral position (normal position with head erect facing forward), place your left hand on the left side of your head.\nNow gently push towards the left as you contract the left neck muscles but resisting any movement of your head. Start with slow tension and increase slowly. Keep breathing normally as you execute this contraction.\nHold for the recommended number of seconds.\nNow release the tension slowly.\nRest for the recommended amount of time and repeat with your right hand placed on the right side of your head.",
    "images": [
      "Isometric_Neck_Exercise_-_Sides/0.jpg",
      "Isometric_Neck_Exercise_-_Sides/1.jpg"
    ],
    "primaryMuscles": [
      "neck"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Isometric_Wipers",
    "name": "Isometric Wipers",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Assume a push-up position, supporting your weight on your hands and toes while keeping your body straight. Your hands should be just outside of shoulder width. This will be your starting position.\nBegin by shifting your body weight as far to one side as possible, allowing the elbow on that side to flex as you lower your body.\nReverse the motion by extending the flexed arm, pushing yourself up and then dropping to the other side.\nRepeat for the desired number of repetitions.",
    "images": [
      "Isometric_Wipers/0.jpg",
      "Isometric_Wipers/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "abdominals",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "JM_Press",
    "name": "JM Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Start the exercise the same way you would a close grip bench press. You will lie on a flat bench while holding a barbell at arms length (fully extended) with the elbows in. However, instead of having the arms perpendicular to the torso, make sure the bar is set in a direct line above the upper chest. This will be your starting position.\nNow beginning from a fully extended position lower the bar down as if performing a lying triceps extension. Inhale as you perform this movement. When you reach the half way point, let the bar roll back about one inch by moving the upper arms towards your legs until they are perpendicular to the torso. Tip: Keep the bend at the elbows constant as you bring the upper arms forward.\nAs you exhale, press the bar back up by using the triceps to perform a close grip bench press.\nNow go back to the starting position and start over.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "JM_Press/0.jpg",
      "JM_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Jackknife_Sit-Up",
    "name": "Jackknife Sit-Up",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie flat on the floor (or exercise mat) on your back with your arms extended straight back behind your head and your legs extended also. This will be your starting position.\nAs you exhale, bend at the waist while simultaneously raising your legs and arms to meet in a jackknife position. Tip: The legs should be extended and lifted at approximately a 35-45 degree angle from the floor and the arms should be extended and parallel to your legs. The upper torso should be off the floor.\nWhile inhaling, lower your arms and legs back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Jackknife_Sit-Up/0.jpg",
      "Jackknife_Sit-Up/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Janda_Sit-Up",
    "name": "Janda Sit-Up",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Position your body on the floor in the basic sit-up position; knees to a ninety degree angle with feet flat on the floor and arms either crossed over your chest or to the sides. This will be your starting position.\nAs you strongly tighten your glutes and hamstrings, fill your lungs with air and in a slow (three to six second count) ascent, slowly exhale. Tip: It is important to tighten the glutes and hamstrings as this will cause the hip flexors to be inactivated in a process called reciprocal inhibition, which basically means that opposite muscles to the contracted ones will relax.\nAs you inhale, slowly go back in a controlled manner to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Janda_Sit-Up/0.jpg",
      "Janda_Sit-Up/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Jefferson_Squats",
    "name": "Jefferson Squats",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Place a barbell on the floor.\nStand in the middle of the bar length wise.\nBend down by bending at the knees and keeping your back straight and grasp the front of the bar with your right hand. Your palm should be in (neutral grip) facing the left side.\nGrasp the rear of the bar with your left hand. The palm of your hand should be in neutral grip alignment (palms facing the right side). Tip: Ensure that your grip is even on the bar. Your torso should be positioned right in the middle of the bar and the distance between your torso and your right hand (which should be at the front) should be the same as the distance between your torso and your left hand (which should be to your back).\nNow stand straight up with the weight. Tip: Your feet should be shoulder width apart and your toes slightly pointed out.\nSquat down by bending at the knees and keeping your back straight until your upper thighs are parallel with the floor. Tip: Keep your back as vertical as possible with the floor and your head up. Also remember to not let your knees go past your toes. Inhale during this portion of the movement.\nNow drive yourself back up to the starting position by pushing with the feet . Tip: Keep the bar hanging at arm's length and your elbows locked with a slight bend. The arms only serve as hooks. Avoid doing any lifting with them. Do the lifting with your thighs; not your arms.",
    "images": [
      "Jefferson_Squats/0.jpg",
      "Jefferson_Squats/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back",
      "traps"
    ]
  },
  {
    "id": "Jogging_Treadmill",
    "name": "Jogging, Treadmill",
    "category": "cardio",
    "force": null,
    "level": "beginner",
    "mechanic": null,
    "equipment": "machine",
    "instructions": "To begin, step onto the treadmill and select the desired option from the menu. Most treadmills have a manual setting, or you can select a program to run. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. Elevation can be adjusted to change the intensity of the workout.\nTreadmills offer convenience, cardiovascular benefits, and usually have less impact than jogging outside. A 150 lb person will burn almost 250 calories jogging for 30 minutes, compared to more than 450 calories running. Maintain proper posture as you jog, and only hold onto the handles when necessary, such as when dismounting or checking your heart rate.",
    "images": [
      "Jogging_Treadmill/0.jpg",
      "Jogging_Treadmill/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Kettlebell_Arnold_Press",
    "name": "Kettlebell Arnold Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean a kettlebell to your shoulder. Clean the kettlebell to your shoulder by extending through the legs and hips as you raise the kettlebell towards your shoulder. The palm should be facing inward.\nLooking straight ahead, press the kettlebell out and overhead, rotating your wrist so that your palm faces forward at the top of the motion.\nReturn the kettlebell to the starting position, with the palm facing in.",
    "images": [
      "Kettlebell_Arnold_Press/0.jpg",
      "Kettlebell_Arnold_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Kettlebell_Dead_Clean",
    "name": "Kettlebell Dead Clean",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place kettlebell between your feet. To get in the starting position, push your butt back and look straight ahead.\nClean the kettlebell to your shoulder. Clean the kettlebell to your shoulders by extending through the legs and hips as you raise the kettlebell towards your shoulder. The wrist should rotate as you do so.\nLower the kettlebell, keeping the hamstrings loaded by keeping your back straight and your butt out.",
    "images": [
      "Kettlebell_Dead_Clean/0.jpg",
      "Kettlebell_Dead_Clean/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "lower back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Kettlebell_Figure_8",
    "name": "Kettlebell Figure 8",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": null,
    "equipment": "kettlebells",
    "instructions": "Place one kettlebell between your legs and take a wider than shoulder width stance. Bend over by pushing your butt out and keeping your back flat.\nPick up a kettlebell and pass it to your other hand between your legs. The receiving hand should reach from behind the legs. Go back and forth for several repetitions.",
    "images": [
      "Kettlebell_Figure_8/0.jpg",
      "Kettlebell_Figure_8/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "shoulders"
    ]
  },
  {
    "id": "Kettlebell_Hang_Clean",
    "name": "Kettlebell Hang Clean",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place kettlebell between your feet. To get in the starting position, push your butt back and look straight ahead.\nClean kettlebell to your shoulder. Clean the kettlebell to your shoulders by extending through the legs and hips as you raise the kettlebell towards your shoulder. The wrist should rotate as you do so.\nLower kettlebell to a hanging position between your legs while keeping the hamstrings loaded. Keep your head up at all times.",
    "images": [
      "Kettlebell_Hang_Clean/0.jpg",
      "Kettlebell_Hang_Clean/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "lower back",
      "shoulders",
      "traps"
    ]
  },
  {
    "id": "Kettlebell_One-Legged_Deadlift",
    "name": "Kettlebell One-Legged Deadlift",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Hold a kettlebell by the handle in one hand. Stand on one leg, on the same side that you hold the kettlebell.\nKeeping that knee slightly bent, perform a stiff legged deadlift by bending at the hip, extending your free leg behind you for balance.\nContinue lowering the kettlebell until you are parallel to the ground, and then return to the upright position.",
    "images": [
      "Kettlebell_One-Legged_Deadlift/0.jpg",
      "Kettlebell_One-Legged_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "glutes",
      "lower back"
    ]
  },
  {
    "id": "Kettlebell_Pass_Between_The_Legs",
    "name": "Kettlebell Pass Between The Legs",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place one kettlebell between your legs and take a comfortable stance. Bend over by pushing your butt out and keeping your back flat.\nPick up a kettlebell and pass it to your other hand between your legs, in the fashion of a \"W\". Go back and forth for several repetitions.",
    "images": [
      "Kettlebell_Pass_Between_The_Legs/0.jpg",
      "Kettlebell_Pass_Between_The_Legs/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings",
      "shoulders"
    ]
  },
  {
    "id": "Kettlebell_Pirate_Ships",
    "name": "Kettlebell Pirate Ships",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "With a wide stance, hold a kettlebell with both hands. Allow it to hang at waist level with your arms extended. This will be your starting position.\nInitiate the movement by turning to one side, swinging the kettlebell to head height. Briefly pause at the top of the motion.\nAllow the bell to drop as you rotate to the opposite side, again raising the kettlebell to head height.\nRepeat for the desired amount of repetitions.",
    "images": [
      "Kettlebell_Pirate_Ships/0.jpg",
      "Kettlebell_Pirate_Ships/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "abdominals"
    ]
  },
  {
    "id": "Kettlebell_Pistol_Squat",
    "name": "Kettlebell Pistol Squat",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Pick up a kettlebell with two hands and hold it by the horns. Hold one leg off of the floor and squat down on the other.\nSquat down by flexing the knee and sitting back with the hips, holding the kettlebell up in front of you.\nHold the bottom position for a second and then reverse the motion, driving through the heel and keeping your head and chest up.\nLower yourself again and repeat.",
    "images": [
      "Kettlebell_Pistol_Squat/0.jpg",
      "Kettlebell_Pistol_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "shoulders"
    ]
  },
  {
    "id": "Kettlebell_Seated_Press",
    "name": "Kettlebell Seated Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Sit on the floor and spread your legs out comfortably.\nClean one kettlebell to your shoulder.\nPress the kettlebell up and out until it is locked out overhead. Return to the starting position.",
    "images": [
      "Kettlebell_Seated_Press/0.jpg",
      "Kettlebell_Seated_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Kettlebell_Seesaw_Press",
    "name": "Kettlebell Seesaw Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean two kettlebells two your shoulders.\nPress one kettlebell.\nLower the kettlebell and immediately press the other kettlebell. Make sure to do the same amount of reps on both sides.",
    "images": [
      "Kettlebell_Seesaw_Press/0.jpg",
      "Kettlebell_Seesaw_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Kettlebell_Sumo_High_Pull",
    "name": "Kettlebell Sumo High Pull",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place a kettlebell on the ground between your feet. Position your feet in a wide stance, and grasp the kettlebell with two hands. Set your hips back as far as possible, with your knees bent. Keep your chest and head up. This will be your starting position.\nBegin by extending the hips and knees, simultaneously pulling the kettlebell to your shoulders, raising your elbows as you do so. Reverse the motion to return to the starting position.",
    "images": [
      "Kettlebell_Sumo_High_Pull/0.jpg",
      "Kettlebell_Sumo_High_Pull/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": [
      "adductors",
      "glutes",
      "hamstrings",
      "quadriceps",
      "shoulders"
    ]
  },
  {
    "id": "Kettlebell_Thruster",
    "name": "Kettlebell Thruster",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so. This will be your starting position.\nBegin to squat by flexing your hips and knees, lowering your hips between your legs. Maintain an upright, straight back as you descend as low as you can.\nAt the bottom, reverse direction and squat by extending your knees and hips, driving through your heels. As you do so, press both kettlebells overhead by extending your arms straight up, using the momentum from the squat to help drive the weights upward.\nAs you begin the next repetition, return the weights to the shoulders.",
    "images": [
      "Kettlebell_Thruster/0.jpg",
      "Kettlebell_Thruster/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "triceps"
    ]
  },
  {
    "id": "Kettlebell_Turkish_Get-Up_Lunge_style",
    "name": "Kettlebell Turkish Get-Up (Lunge style)",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Lie on your back on the floor and press a kettlebell to the top position by extending the elbow. Bend the knee on the same side as the kettlebell.\nKeeping the kettlebell locked out at all times, pivot to the opposite side and use your non- working arm to assist you in driving forward to the lunge position. Using your free hand, push yourself to a seated position, then progressing to one knee.\nWhile looking up at the kettlebell, slowly stand up. Reverse the motion back to the starting position and repeat.",
    "images": [
      "Kettlebell_Turkish_Get-Up_Lunge_style/0.jpg",
      "Kettlebell_Turkish_Get-Up_Lunge_style/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "abdominals",
      "hamstrings",
      "quadriceps",
      "triceps"
    ]
  },
  {
    "id": "Kettlebell_Turkish_Get-Up_Squat_style",
    "name": "Kettlebell Turkish Get-Up (Squat style)",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Lie on your back on the floor and press a kettlebell to the top position by extending the elbow. Bend the knee on the same side as the kettlebell.\nKeeping the kettlebell locked out at all times, pivot to the opposite side and use your non- working arm to assist you in driving forward to the lunge position.\nUsing your free hand, push yourself to a seated position, then progressing to your feet. While looking up at the kettlebell, slowly stand up. Reverse the motion back to the starting position and repeat.",
    "images": [
      "Kettlebell_Turkish_Get-Up_Squat_style/0.jpg",
      "Kettlebell_Turkish_Get-Up_Squat_style/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "abdominals",
      "calves",
      "hamstrings",
      "quadriceps",
      "triceps"
    ]
  },
  {
    "id": "Kettlebell_Windmill",
    "name": "Kettlebell Windmill",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place a kettlebell in front of your lead foot and clean and press it overhead with your opposite arm. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulders. Rotate your wrist as you do so, so that the palm faces forward. Press it overhead by extending the elbow.\nKeeping the kettlebell locked out at all times, push your butt out in the direction of the locked out kettlebell. Turn your feet out at a forty-five degree angle from the arm with the locked out kettlebell. Bending at the hip to one side, sticking your butt out, slowly lean until you can touch the floor with your free hand. Keep your eyes on the kettlebell that you hold over your head at all times.\nPause for a second after reaching the ground and reverse the motion back to the starting position.",
    "images": [
      "Kettlebell_Windmill/0.jpg",
      "Kettlebell_Windmill/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Kipping_Muscle_Up",
    "name": "Kipping Muscle Up",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Grip the rings using a false grip, with the base of your palms on top of the rings.\nBegin with a movement swinging your legs backward slightly.\nCounter that movement by swinging your legs forward and up, jerking your chin and chest back, pulling yourself up with both arms as you do so. As you reach the top position of the pull-up, pull the rings to your armpits as you roll your shoulders forward, allowing your elbows to move straight back behind you. This puts you into the proper position to continue into the dip portion of the movement.\nMaintaining control and stability, extend through the elbow to complete the motion.\nUse care when lowering yourself to the ground.",
    "images": [
      "Kipping_Muscle_Up/0.jpg",
      "Kipping_Muscle_Up/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "abdominals",
      "biceps",
      "forearms",
      "middle back",
      "shoulders",
      "traps",
      "triceps"
    ]
  },
  {
    "id": "Knee_Hip_Raise_On_Parallel_Bars",
    "name": "Knee/Hip Raise On Parallel Bars",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Position your body on the vertical leg raise bench so that your forearms are resting on the pads next to the torso and holding on to the handles. Your arms will be bent at a 90 degree angle.\nThe torso should be straight with the lower back pressed against the pad of the machine and the legs extended pointing towards the floor. This will be your starting position.\nNow as you breathe out, lift your legs up as you keep them extended. Continue this movement until your legs are roughly parallel to the floor and then hold the contraction for a second. Tip: Do not use any momentum or swinging as you perform this exercise.\nSlowly go back to the starting position as you breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Knee_Hip_Raise_On_Parallel_Bars/0.jpg",
      "Knee_Hip_Raise_On_Parallel_Bars/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Kneeling_Cable_Crunch_With_Alternating_Oblique_Twists",
    "name": "Kneeling Cable Crunch With Alternating Oblique Twists",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Connect a rope attachment to a high pulley cable and position a mat on the floor in front of it.\nGrab the rope with both hands and kneel approximately two feet back from the tower.\nPosition the rope behind your head with your hands by your ears.\nKeep your hands in the same place, contract your abs and pull downward on the rope in a crunching movement until your elbows reach your knees.\nPause briefly at the bottom and rise up in a slow and controlled manner until you reach the starting position.\nRepeat the same downward movement until you're halfway down, at which time you'll begin rotating one of your elbows to the opposite knee.\nAgain, pause briefly at the bottom and rise up in a slow and controlled manner until you reach the starting position.\nRepeat the same movement as before, but alternate the other elbow to the opposite knee.\nContinue this series of movements to failure.",
    "images": [
      "Kneeling_Cable_Crunch_With_Alternating_Oblique_Twists/0.jpg",
      "Kneeling_Cable_Crunch_With_Alternating_Oblique_Twists/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Kneeling_Cable_Triceps_Extension",
    "name": "Kneeling Cable Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Place a bench sideways in front of a high pulley machine.\nHold a straight bar attachment above your head with your hands about 6 inches apart with your palms facing down.\nFace away from the machine and kneel.\nPlace your head and the back of your upper arms on the bench. Your elbows should be bent with the forearms pointing towards the high pulley. This will be your starting position.\nWhile keeping your upper arms close to your head at all times with the elbows in, press the bar out in a semicircular motion until the elbows are locked and your arms are parallel to the floor. Contract the triceps hard and keep this position for a second. Exhale as you perform this movement.\nSlowly return to the starting position as you breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Kneeling_Cable_Triceps_Extension/0.jpg",
      "Kneeling_Cable_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Kneeling_High_Pulley_Row",
    "name": "Kneeling High Pulley Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Select the appropriate weight using a pulley that is above your head. Attach a rope to the cable and kneel a couple of feet away, holding the rope out in front of you with both arms extended. This will be your starting position.\nInitiate the movement by flexing the elbows and fully retracting your shoulders, pulling the rope toward your upper chest with your elbows out.\nAfter pausing briefly, slowly return to the starting position.",
    "images": [
      "Kneeling_High_Pulley_Row/0.jpg",
      "Kneeling_High_Pulley_Row/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back"
    ]
  },
  {
    "id": "Kneeling_Single-Arm_High_Pulley_Row",
    "name": "Kneeling Single-Arm High Pulley Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Attach a single handle to a high pulley and make your weight selection.\nKneel in front of the cable tower, taking the cable with one hand with your arm extended. This will be your starting position.\nStarting with your palm facing forward, pull the weight down to your torso by flexing the elbow and retract the shoulder blade. As you do so, rotate the wrist so that at the completion of the movement, your palm is now facing you.\nAfter a brief pause, return to the starting position.",
    "images": [
      "Kneeling_Single-Arm_High_Pulley_Row/0.jpg",
      "Kneeling_Single-Arm_High_Pulley_Row/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back"
    ]
  },
  {
    "id": "Kneeling_Squat",
    "name": "Kneeling Squat",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Set the bar to the proper height in a power rack. Kneel behind the bar; it may be beneficial to put a mat down to pad your knees. Slide under the bar, racking it across the back of your shoulders. Your shoulder blades should be retracted and the bar tight across your back. Unrack the weight.\nWith your head looking forward, sit back with your butt until you touch your calves.\nReverse the motion, returning the torso to an upright position.",
    "images": [
      "Kneeling_Squat/0.jpg",
      "Kneeling_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "abdominals",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Landmine_180s",
    "name": "Landmine 180's",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight.\nRaise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position.\nPerform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise.\nReverse the motion to swing the weight all the way to the opposite side.\nContinue alternating the movement until the set is complete.",
    "images": [
      "Landmine_180s/0.jpg",
      "Landmine_180s/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "glutes",
      "lower back",
      "shoulders"
    ]
  },
  {
    "id": "Landmine_Linear_Jammer",
    "name": "Landmine Linear Jammer",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Position a bar into landmine or, lacking one, securely anchor it in a corner. Load the bar to an appropriate weight and position the handle attachment on the bar.\nRaise the bar from the floor, taking the handles to your shoulders. This will be your starting position.\nIn an athletic stance, squat by flexing your hips and setting your hips back, keeping your arms flexed.\nReverse the motion by powerfully extending through the hips, knees, and ankles, while also extending the elbows to straighten the arms. This movement should be done explosively, coming out of the squat to full extension as powerfully as possible.\nReturn to the starting position.",
    "images": [
      "Landmine_Linear_Jammer/0.jpg",
      "Landmine_Linear_Jammer/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "abdominals",
      "calves",
      "chest",
      "hamstrings",
      "quadriceps",
      "triceps"
    ]
  },
  {
    "id": "Lateral_Raise_-_With_Bands",
    "name": "Lateral Raise - With Bands",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "bands",
    "instructions": "To begin, stand on an exercise band so that tension begins at arm's length. Grasp the handles using a pronated (palms facing your thighs) grip that is slightly less than shoulder width. The handles should be resting on the sides of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position.\nUse your side shoulders to lift the handles to the sides as you exhale. Continue to lift the handles until they are slightly above parallel. Tip: As you lift the handles, slightly tilt the hand as if you were pouring water and keep your arms extended. Also, keep your torso stationary and pause for a second at the top of the movement.\nLower the handles back down slowly to the starting position. Inhale as you perform this portion of the movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lateral_Raise_-_With_Bands/0.jpg",
      "Lateral_Raise_-_With_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Leg-Over_Floor_Press",
    "name": "Leg-Over Floor Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Lie on the floor with one kettlebell in place on your chest, holding it by the handle. Extend leg on working side over leg on non-working side.Your free arm can be extended out to your side for support.\nPress the kettlebll into a locked out position.\nLower the weight until the elbow touches the ground, keeping the kettlebell above the elbow. Repeat for the desired number of repetitions.",
    "images": [
      "Leg-Over_Floor_Press/0.jpg",
      "Leg-Over_Floor_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Leg_Extensions",
    "name": "Leg Extensions",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "For this exercise you will need to use a leg extension machine. First choose your weight and sit on the machine with your legs under the pad (feet pointed forward) and the hands holding the side bars. This will be your starting position. Tip: You will need to adjust the pad so that it falls on top of your lower leg (just above your feet). Also, make sure that your legs form a 90-degree angle between the lower and upper leg. If the angle is less than 90-degrees then that means the knee is over the toes which in turn creates undue stress at the knee joint. If the machine is designed that way, either look for another machine or just make sure that when you start executing the exercise you stop going down once you hit the 90-degree angle.\nUsing your quadriceps, extend your legs to the maximum as you exhale. Ensure that the rest of the body remains stationary on the seat. Pause a second on the contracted position.\nSlowly lower the weight back to the original position as you inhale, ensuring that you do not go past the 90-degree angle limit.\nRepeat for the recommended amount of times.",
    "images": [
      "Leg_Extensions/0.jpg",
      "Leg_Extensions/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Leg_Lift",
    "name": "Leg Lift",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "While standing up straight with both feet next to each other at around shoulder width, grab a sturdy surface such as the sides of a squat rack or the top of a chair to brace yourself and keep balance.\nWith or without an ankle weight, lift one leg behind you as if performing a leg curl but standing up while keeping the other leg straight. Breathe out as you perform this movement.\nSlowly bring the raised leg back to the floor as you breathe in.\nRepeat for the recommended amount of repetitions.\nRepeat the movement with the opposite leg.",
    "images": [
      "Leg_Lift/0.jpg",
      "Leg_Lift/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings"
    ]
  },
  {
    "id": "Leg_Press",
    "name": "Leg Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a medium (shoulder width) foot stance. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section).\nLower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you. Tip: Make sure that you do not lock your knees. Your torso and the legs should make a perfect 90-degree angle. This will be your starting position.\nAs you inhale, slowly lower the platform until your upper and lower legs make a 90-degree angle.\nPushing mainly with the heels of your feet and using the quadriceps go back to the starting position as you exhale.\nRepeat for the recommended amount of repetitions and ensure to lock the safety pins properly once you are done. You do not want that platform falling on you fully loaded.",
    "images": [
      "Leg_Press/0.jpg",
      "Leg_Press/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Leg_Pull-In",
    "name": "Leg Pull-In",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie on an exercise mat with your legs extended and your hands either palms facing down next to you or under your glutes. Tip: My preference is with the hands next to me. This will be your starting position.\nBend your knees and pull your upper thighs into your midsection as you breathe out. Continue the motion until your knees are around chest level. Contract your abs as you execute this movement and hold for a second at the top. Tip: As you perform the motion, the lower legs (calves) should always remain parallel to the floor.\nReturn to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Leg_Pull-In/0.jpg",
      "Leg_Pull-In/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Leverage_Chest_Press",
    "name": "Leverage Chest Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the bottom or middle of the pectorals at the beginning of the motion.\nYour chest and head should be up and your shoulder blades retracted. This will be your starting position.\nPress the handles forward by extending through the elbow.\nAfter a brief pause at the top, return the weight just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete.",
    "images": [
      "Leverage_Chest_Press/0.jpg",
      "Leverage_Chest_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Leverage_Deadlift",
    "name": "Leverage Deadlift",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Load the pins to an appropriate weight. Position yourself directly between the handles. Grasp the bottom handles with a comfortable grip, and then lower your hips as you take a breath. Look forward with your head and keep your chest up. This will be your starting position.\nReturn the weight to the starting position.",
    "images": [
      "Leverage_Deadlift/0.jpg",
      "Leverage_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Leverage_Decline_Chest_Press",
    "name": "Leverage Decline Chest Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the bottom of the pectorals at the beginning of the motion. Your chest and head should be up and your shoulder blades retracted. This will be your starting position.\nPress the handles forward by extending through the elbow.\nAfter a brief pause at the top, return the weight just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete.",
    "images": [
      "Leverage_Decline_Chest_Press/0.jpg",
      "Leverage_Decline_Chest_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Leverage_High_Row",
    "name": "Leverage High Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Load an appropriate weight onto the pins and adjust the seat height so that you can just reach the handles above you. Adjust the knee pad to help keep you down. Grasp the handles with a pronated grip. This will be your starting position.\nPull the handles towards your torso, retracting your shoulder blades as you flex the elbow.\nPause at the bottom of the motion, and then slowly return the handles to the starting position.\nFor multiple repetitions, avoid completely returning the weight to the stops to keep tension on the muscles being worked.",
    "images": [
      "Leverage_High_Row/0.jpg",
      "Leverage_High_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "lats"
    ]
  },
  {
    "id": "Leverage_Incline_Chest_Press",
    "name": "Leverage Incline Chest Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the top of the pectorals at the beginning of the motion. Your chest and head should be up and your shoulder blades retracted. This will be your starting position.\nPress the handles forward by extending through the elbow.\nAfter a brief pause at the top, return the weight just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete.",
    "images": [
      "Leverage_Incline_Chest_Press/0.jpg",
      "Leverage_Incline_Chest_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Leverage_Iso_Row",
    "name": "Leverage Iso Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Load an appropriate weight onto the pins and adjust the seat height so that the handles are at chest level. Grasp the handles with either a neutral or pronated grip. This will be your starting position.\nPull the handles towards your torso, retracting your shoulder blades as you flex the elbow.\nPause at the bottom of the motion, and then slowly return the handles to the starting position. For multiple repetitions, avoid completely returning the weight to the stops to keep tension on the muscles being worked.",
    "images": [
      "Leverage_Iso_Row/0.jpg",
      "Leverage_Iso_Row/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back"
    ]
  },
  {
    "id": "Leverage_Shoulder_Press",
    "name": "Leverage Shoulder Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the top of the shoulders at the beginning of the motion. Your chest and head should be up and handles held with a pronated grip. This will be your starting position.\nPress the handles upward by extending through the elbow.\nAfter a brief pause at the top, return the weight to just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete.",
    "images": [
      "Leverage_Shoulder_Press/0.jpg",
      "Leverage_Shoulder_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Leverage_Shrug",
    "name": "Leverage Shrug",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Load the pins to an appropriate weight. Position yourself directly between the handles.\nGrasp the top handles with a comfortable grip, and then lower your hips as you take a breath. Look forward with your head and keep your chest up.\nDrive through the floor with your heels, extending your hips and knees as you rise to a standing position. Keep your arms straight throughout the movement, finishing with your shoulders back. This will be your starting position.\nRaise the weight by shrugging the shoulders towards your ears, moving straight up and down.\nPause at the top of the motion, and then return the weight to the starting position.",
    "images": [
      "Leverage_Shrug/0.jpg",
      "Leverage_Shrug/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "London_Bridges",
    "name": "London Bridges",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Attach a climbing rope to a high beam or cross member. Below it, ensure that the smith machine bar is locked in place with the safeties and cannot move. Alternatively, a secure box could also be utilized.\nStand on the bar, using the rope to balance yourself. This will be your starting position.\nKeeping your body straight, lean back and lower your body by slowly going hand over hand with the rope. Continue until you are perpendicular to the ground.\nKeeping your body straight, reverse the motion, going hand over hand back to the starting position.",
    "images": [
      "London_Bridges/0.jpg",
      "London_Bridges/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "forearms",
      "middle back"
    ]
  },
  {
    "id": "Low_Cable_Crossover",
    "name": "Low Cable Crossover",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "To move into the starting position, place the pulleys at the low position, select the resistance to be used and grasp a handle in each hand.\nStep forward, gaining tension in the pulleys. Your palms should be facing forward, hands below the waist, and your arms straight. This will be your starting position.\nWith a slight bend in your arms, draw your hands upward and toward the midline of your body. Your hands should come together in front of your chest, palms facing up.\nReturn your arms back to the starting position after a brief pause.",
    "images": [
      "Low_Cable_Crossover/0.jpg",
      "Low_Cable_Crossover/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Low_Cable_Triceps_Extension",
    "name": "Low Cable Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Select the desired weight and lay down face up on the bench of a seated row machine that has a rope attached to it. Your head should be pointing towards the attachment.\nGrab the outside of the rope ends with your palms facing each other (neutral grip).\nPosition your elbows so that they are bent at a 90 degree angle and your upper arms are perpendicular (90 degree angle) to your torso. Tip: Keep the elbows in and make sure that the upper arms point to the ceiling while your forearms point towards the pulley above your head. This will be your starting position.\nAs you breathe out, extend your lower arms until they are straight and vertical. The upper arms and elbows remain stationary throughout the movement. Only the forearms should move. Contract the triceps hard for a second.\nAs you breathe in slowly return to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Low_Cable_Triceps_Extension/0.jpg",
      "Low_Cable_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Low_Pulley_Row_To_Neck",
    "name": "Low Pulley Row To Neck",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Sit on a low pulley row machine with a rope attachment.\nGrab the ends of the rope using a palms-down grip and sit with your back straight and your knees slightly bent. Tip: Keep your back almost completely vertical and your arms fully extended in front of you. This will be your starting position.\nWhile keeping your torso stationary, lift your elbows and start bending them as you pull the rope towards your neck while exhaling. Throughout the movement your upper arms should remain parallel to the floor. Tip: Continue this motion until your hands are almost next to your ears (the forearms will not be parallel to the floor at the end of the movement as they will be angled a bit upwards) and your elbows are out away from your sides.\nAfter holding for a second or so at the contracted position, come back slowly to the starting position as you inhale. Tip: Again, during no part of the movement should the torso move.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Low_Pulley_Row_To_Neck/0.jpg",
      "Low_Pulley_Row_To_Neck/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back",
      "traps"
    ]
  },
  {
    "id": "Lunge_Pass_Through",
    "name": "Lunge Pass Through",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Stand with your torso upright holding a kettlebell in your right hand. This will be your starting position.\nStep forward with your left foot and lower your upper body down by flexing the hip and the knee, keeping the torso upright. Lower your back knee until it nearly touches the ground.\nAs you lunge, pass the kettlebell under your front leg to your opposite hand.\nPressing through the heel of your foot, return to the starting position.\nRepeat the movement for the recommended amount of repetitions, alternating legs.",
    "images": [
      "Lunge_Pass_Through/0.jpg",
      "Lunge_Pass_Through/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "quadriceps"
    ]
  },
  {
    "id": "Lunge_Sprint",
    "name": "Lunge Sprint",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Adjust a bar in a Smith machine to an appropriate height. Position yourself under the bar, racking it across the back of your shoulders. Unrack the bar, and then split your feet, moving one foot forward and one foot back. This will be your starting position.\nLower your back knee nearly to the ground, flexing the knees and lowering your hips as you do so.\nAt the bottom of the descent, immediately reverse direction. Explosively drive through the heel of your front foot with light pressure from your back foot. Jump up and reverse the position of your legs.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lunge_Sprint/0.jpg",
      "Lunge_Sprint/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Lying_Cable_Curl",
    "name": "Lying Cable Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Grab a straight bar or E-Z bar attachment that is attached to the low pulley with both hands, using an underhand (palms facing up) shoulder-width grip.\nLie flat on your back on top of an exercise mat in front of the weight stack with your feet flat against the frame of the pulley machine and your legs straight.\nWith your arms extended and your elbows close to your body slightly bend your arms. This will be your starting position.\nWhile keeping your upper arms stationary and the elbows close to your body, curl the bar up slowly toward your chest as you breathe out and you squeeze the biceps.\nAfter a second squeeze at the top of the movement, slowly return to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_Cable_Curl/0.jpg",
      "Lying_Cable_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Lying_Cambered_Barbell_Row",
    "name": "Lying Cambered Barbell Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Place a cambered bar underneath an exercise bench.\nLie face down on the exercise bench and grab the bar using a palms down (pronated grip) that is wider than shoulder width. This will be your starting position.\nAs you exhale row the bar up as you keep the elbows close to your body to either your chest, in order to target the upper mid back, or to your stomach if targeting the lats is your goal.\nAfter a second hold at the top, lower back down to the starting position slowly as you inhale.",
    "images": [
      "Lying_Cambered_Barbell_Row/0.jpg",
      "Lying_Cambered_Barbell_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats",
      "traps"
    ]
  },
  {
    "id": "Lying_Close-Grip_Bar_Curl_On_High_Pulley",
    "name": "Lying Close-Grip Bar Curl On High Pulley",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Place a flat bench in front of a high pulley or lat pulldown machine.\nHold the straight bar attachment using an underhand grip (palms up) that is about shoulder width.\nLie on your back with your head over the end of the bench.\nNow extend your arms straight above your shoulders. Your torso and your arms should make a 90-degree angle and the elbows should be in. This will be your starting position.\nAs you breathe out, curl the bar down in a semicircular motion until it touches your chin. Squeeze the biceps for a second at the top contracted position. Tip: As you execute this motion only the forearms should move. At no time should the upper arms be moving at all. They are to remain perpendicular throughout the movement.\nReturn to starting position slowly.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_Close-Grip_Bar_Curl_On_High_Pulley/0.jpg",
      "Lying_Close-Grip_Bar_Curl_On_High_Pulley/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Lying_Close-Grip_Barbell_Triceps_Extension_Behind_The_Head",
    "name": "Lying Close-Grip Barbell Triceps Extension Behind The Head",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "While holding a barbell or EZ Curl bar with a pronated grip (palms facing forward), lie on your back on a flat bench with your head close to the end of the bench. Tip: If you are holding a barbell grab it using a shoulder-width grip and if you are using an E-Z Bar grab it on the inner handles.\nExtend your arms in front of you and slowly bring the bar back in a semi circular motion (while keeping the arms extended) to a position over your head. At the end of this step your arms should be overhead and parallel to the floor. This will be your starting position. Tip: Keep your elbows in at all times.\nAs you inhale, lower the bar by bending at the elbows and while keeping the upper arm stationary. Keep lowering the bar until your forearms are perpendicular to the floor.\nAs you exhale bring the bar back up to the starting position by pushing the bar up in a semi-circular motion until the lower arms are also parallel to the floor. Contract the triceps hard at the top of the movement for a second. Tip: Again, only the forearms should move. The upper arms should remain stationary at all times.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_Close-Grip_Barbell_Triceps_Extension_Behind_The_Head/0.jpg",
      "Lying_Close-Grip_Barbell_Triceps_Extension_Behind_The_Head/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Lying_Close-Grip_Barbell_Triceps_Press_To_Chin",
    "name": "Lying Close-Grip Barbell Triceps Press To Chin",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "e-z curl bar",
    "instructions": "While holding a barbell or EZ Curl bar with a pronated grip (palms facing forward), lie on your back on a flat bench with your head off the end of the bench. Tip: If you are holding a barbell grab it using a shoulder-width grip and if you are using an E-Z Bar grab it on the inner handles.\nExtend your arms in front of you as you hold the barbell over your chest. The arms should be perpendicular to your torso (90-degree angle). This will be your starting position.\nAs you inhale, lower the bar in a semi-circular motion by bending at the elbows and while keeping the upper arm stationary and elbows in. Keep lowering the bar until it lightly touches your chin.\nAs you exhale bring the bar back up to the starting position by pushing the bar up in a semi-circular motion. Contract the triceps hard at the top of the movement for a second. Tip: Again, only the forearms should move. The upper arms should remain stationary at all times.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_Close-Grip_Barbell_Triceps_Press_To_Chin/0.jpg",
      "Lying_Close-Grip_Barbell_Triceps_Press_To_Chin/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Lying_Dumbbell_Tricep_Extension",
    "name": "Lying Dumbbell Tricep Extension",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie on a flat bench while holding two dumbbells directly in front of you. Your arms should be fully extended at a 90-degree angle from your torso and the floor. The palms should be facing in and the elbows should be tucked in. This is the starting position.\nAs you breathe in and you keep the upper arms stationary with the elbows in, slowly lower the weight until the dumbbells are near your ears.\nAt that point, while keeping the elbows in and the upper arms stationary, use the triceps to bring the weight back up to the starting position as you breathe out.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_Dumbbell_Tricep_Extension/0.jpg",
      "Lying_Dumbbell_Tricep_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Lying_Face_Down_Plate_Neck_Resistance",
    "name": "Lying Face Down Plate Neck Resistance",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Lie face down with your whole body straight on a flat bench while holding a weight plate behind your head. Tip: You will need to position yourself so that your shoulders are slightly above the end of a flat bench in order for the upper chest, neck and face to be off the bench. This will be your starting position.\nWhile keeping the plate secure on the back of your head slowly lower your head (as in saying \"yes\") as you breathe in.\nRaise your head back up to the starting position in a semi-circular motion as you breathe out. Hold the contraction for a second.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_Face_Down_Plate_Neck_Resistance/0.jpg",
      "Lying_Face_Down_Plate_Neck_Resistance/1.jpg"
    ],
    "primaryMuscles": [
      "neck"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Lying_Face_Up_Plate_Neck_Resistance",
    "name": "Lying Face Up Plate Neck Resistance",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Lie face up with your whole body straight on a flat bench while holding a weight plate on top of your forehead. Tip: You will need to position yourself so that your shoulders are slightly above the end of a flat bench in order for the traps, neck and head to be off the bench. This will be your starting position.\nWhile keeping the plate secure on your forehead slowly lower your head back in a semi-circular motion as you breathe in.\nRaise your head back up to the starting position in a semi-circular motion as you breathe out. Hold the contraction for a second.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_Face_Up_Plate_Neck_Resistance/0.jpg",
      "Lying_Face_Up_Plate_Neck_Resistance/1.jpg"
    ],
    "primaryMuscles": [
      "neck"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Lying_High_Bench_Barbell_Curl",
    "name": "Lying High Bench Barbell Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Lie face forward on a tall flat bench while holding a barbell with a supinated grip (palms facing up). Tip: If you are holding a barbell grab it using a shoulder-width grip and if you are using an E-Z Bar grab it on the inner handles. Your upper body should be positioned in a way that the upper chest is over the end of the bench and the barbell is hanging in front of you with the arms extended and perpendicular to the floor. This will be your starting position.\nWhile keeping the elbows in and the upper arms stationary, curl the weight up in a semi-circular motion as you contract the biceps and exhale. Hold at the top of the movement for a second.\nAs you inhale, slowly go back to the starting position. Tip: Maintain full control of the weight at all times and avoid any swinging. Remember, only the forearms should move throughout the movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_High_Bench_Barbell_Curl/0.jpg",
      "Lying_High_Bench_Barbell_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Lying_Leg_Curls",
    "name": "Lying Leg Curls",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Adjust the machine lever to fit your height and lie face down on the leg curl machine with the pad of the lever on the back of your legs (just a few inches under the calves). Tip: Preferably use a leg curl machine that is angled as opposed to flat since an angled position is more favorable for hamstrings recruitment.\nKeeping the torso flat on the bench, ensure your legs are fully stretched and grab the side handles of the machine. Position your toes straight (or you can also use any of the other two stances described on the foot positioning section). This will be your starting position.\nAs you exhale, curl your legs up as far as possible without lifting the upper legs from the pad. Once you hit the fully contracted position, hold it for a second.\nAs you inhale, bring the legs back to the initial position. Repeat for the recommended amount of repetitions.",
    "images": [
      "Lying_Leg_Curls/0.jpg",
      "Lying_Leg_Curls/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Lying_Machine_Squat",
    "name": "Lying Machine Squat",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Adjust the leg machine to a height that will allow you to get inside it with your knees bent and the thighs slightly below parallel.\nOnce you select the weight, position yourself inside the machine face up with the knees bent and thighs slightly below parallel to the platform. Make sure that the knees do not go past the toes. The angle created between the hamstrings and the calves should be one that is slightly less than 90 degrees (since your starting position requires you to start slightly below parallel). Your back and your head should be resting on the machine while your shoulders are pressed under the shoulder pads.\nPlace your hands by the handles and position your feet slightly pointing out at a shoulder width position. This will be your starting position.\nWhile pressing with the balls of the feet as you breathe out, make your whole body erect as you squeeze the quads. Hold the contracted position for a second. Tip: Since you are starting below parallel, you can opt to use your hands to help you up by pressing on your thighs only on the first repetition.\nSlowly squat down as you inhale but instead of going all the way down to the starting position, just stop once your thighs are parallel to the platform. The angle between your hamstrings and calves should be a 90-degree angle.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_Machine_Squat/0.jpg",
      "Lying_Machine_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Lying_One-Arm_Lateral_Raise",
    "name": "Lying One-Arm Lateral Raise",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "While holding a dumbbell in one hand, lay with your chest down on a flat bench. The other hand can be used to hold to the leg of the bench for stability.\nPosition the palm of the hand that is holding the dumbbell in a neutral manner (palms facing your torso) as you keep the arm extended with the elbow slightly bent. This will be your starting position.\nNow raise the arm with the dumbbell to the side until your elbow is at shoulder height and your arm is roughly parallel to the floor as you exhale. Tip: Maintain your arm perpendicular to the torso while keeping your arm extended throughout the movement. Also, keep the contraction at the top for a second.\nSlowly lower the dumbbell to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_One-Arm_Lateral_Raise/0.jpg",
      "Lying_One-Arm_Lateral_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Lying_Rear_Delt_Raise",
    "name": "Lying Rear Delt Raise",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "While holding a dumbbell in each hand, lay with your chest down on a flat bench.\nPosition the palms of the hands in a neutral manner (palms facing your torso) as you keep the arms extended with the elbows slightly bent. This will be your starting position.\nNow raise the arms to the side until your elbows are at shoulder height and your arms are roughly parallel to the floor as you exhale. Tip: Maintain your arms perpendicular to the torso while keeping them extended throughout the movement. Also, keep the contraction at the top for a second.\nSlowly lower the dumbbells to the starting position as you inhale.\nRepeat for the recommended amount of repetitions and then switch to the other arm.",
    "images": [
      "Lying_Rear_Delt_Raise/0.jpg",
      "Lying_Rear_Delt_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Lying_Supine_Dumbbell_Curl",
    "name": "Lying Supine Dumbbell Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie down on a flat bench face up while holding a dumbbell in each arm on top of your thighs.\nBring the dumbbells to the sides with the arms extended and the palms of the hands facing your thighs (neutral grip).\nWhile keeping the arms close to your torso and elbows in, slowly lower your arms (as you keep them extended with a slight bend at the elbows) as far down towards the floor as you can go. Once you cannot go down any further, lock your upper arms in that position and that will be your starting position.\nAs you breathe out, slowly begin to curl the weights up as you simultaneously rotate your wrists so that the palms of the hands face up. Continue curling the weight until your biceps are fully contracted and squeeze hard at the top position for a second. Tip: Only the forearms should move. Upper arms should remain stationary and elbows should stay in throughout the movement.\nReturn back to the starting position very slowly.",
    "images": [
      "Lying_Supine_Dumbbell_Curl/0.jpg",
      "Lying_Supine_Dumbbell_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Lying_T-Bar_Row",
    "name": "Lying T-Bar Row",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Load up the T-bar Row Machine with the desired weight and adjust the leg height so that your upper chest is at the top of the pad. Tip: In some machines all you can do is stand on the appropriate step that allows you to be at a height that has the upper chest at the top of the pad.\nLay face down on the pad and grab the handles. You can either use a palms down, palms up, or palms in position depending on what part of your back you want to emphasize.\nLift the bar off the rack and extend your arms in front of you. This will be your starting position.\nAs you exhale slowly pull the weight up and squeeze your back at the top of the movement. Tip: Keep the upper arms as close to the torso as possible throughout the movement in order to better engage the back muscles. Also, do not lift your body off of the pad at any time and refrain from using the biceps to lift the weight.\nAfter a second contraction at the top of the movement, as you inhale, slowly go back down to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_T-Bar_Row/0.jpg",
      "Lying_T-Bar_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Lying_Triceps_Press",
    "name": "Lying Triceps Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "e-z curl bar",
    "instructions": "Lie on a flat bench with either an e-z bar (my preference) or a straight bar placed on the floor behind your head and your feet on the floor.\nGrab the bar behind you, using a medium overhand (pronated) grip, and raise the bar in front of you at arms length. Tip: The arms should be perpendicular to the torso and the floor. The elbows should be tucked in. This is the starting position.\nAs you breathe in, slowly lower the weight until the bar lightly touches your forehead while keeping the upper arms and elbows stationary.\nAt that point, use the triceps to bring the weight back up to the starting position as you breathe out.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Lying_Triceps_Press/0.jpg",
      "Lying_Triceps_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Machine_Bench_Press",
    "name": "Machine Bench Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Sit down on the Chest Press Machine and select the weight.\nStep on the lever provided by the machine since it will help you to bring the handles forward so that you can grab the handles and fully extend the arms.\nGrab the handles with a palms-down grip and lift your elbows so that your upper arms are parallel to the floor to the sides of your torso. Tip: Your forearms will be pointing forward since you are grabbing the handles. Once you bring the handles forward and extend the arms you will be at the starting position.\nNow bring the handles back towards you as you breathe in.\nPush the handles away from you as you flex your pecs and you breathe out. Hold the contraction for a second before going back to the starting position.\nRepeat for the recommended amount of reps.\nWhen finished step on the lever again and slowly get the handles back to their original place.",
    "images": [
      "Machine_Bench_Press/0.jpg",
      "Machine_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Machine_Bicep_Curl",
    "name": "Machine Bicep Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Adjust the seat to the appropriate height and make your weight selection. Place your upper arms against the pads and grasp the handles. This will be your starting position.\nPerform the movement by flexing the elbow, pulling your lower arm towards your upper arm.\nPause at the top of the movement, and then slowly return the weight to the starting position.\nAvoid returning the weight all the way to the stops until the set is complete to keep tension on the muscles being worked.",
    "images": [
      "Machine_Bicep_Curl/0.jpg",
      "Machine_Bicep_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Machine_Preacher_Curls",
    "name": "Machine Preacher Curls",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Sit down on the Preacher Curl Machine and select the weight.\nPlace the back of your upper arms (your triceps) on the preacher pad provided and grab the handles using an underhand grip (palms facing up). Tip: Make sure that when you place the arms on the pad you keep the elbows in. This will be your starting position.\nNow lift the handles as you exhale and you contract the biceps. At the top of the position make sure that you hold the contraction for a second. Tip: Only the forearms should move. The upper arms should remain stationary and on the pad at all times.\nLower the handles slowly back to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Machine_Preacher_Curls/0.jpg",
      "Machine_Preacher_Curls/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Machine_Shoulder_Military_Press",
    "name": "Machine Shoulder (Military) Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Sit down on the Shoulder Press Machine and select the weight.\nGrab the handles to your sides as you keep the elbows bent and in line with your torso. This will be your starting position.\nNow lift the handles as you exhale and you extend the arms fully. At the top of the position make sure that you hold the contraction for a second.\nLower the handles slowly back to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Machine_Shoulder_Military_Press/0.jpg",
      "Machine_Shoulder_Military_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Machine_Triceps_Extension",
    "name": "Machine Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Adjust the seat to the appropriate height and make your weight selection. Place your upper arms against the pads and grasp the handles. This will be your starting position.\nPerform the movement by extending the elbow, pulling your lower arm away from your upper arm.\nPause at the completion of the movement, and then slowly return the weight to the starting position.\nAvoid returning the weight all the way to the stops until the set is complete to keep tension on the muscles being worked.",
    "images": [
      "Machine_Triceps_Extension/0.jpg",
      "Machine_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Middle_Back_Shrug",
    "name": "Middle Back Shrug",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie facedown on an incline bench while holding a dumbbell in each hand. Your arms should be fully extended hanging down and pointing towards the floor. The palms of your hands should be facing each other. This will be your starting position.\nAs you exhale, squeeze your shoulder blades together and hold the contraction for a full second. Tip: This movement is just like the reverse action of a hug, or trying to perform rear laterals as if you had no arms.\nAs you inhale go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Middle_Back_Shrug/0.jpg",
      "Middle_Back_Shrug/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Mixed_Grip_Chin",
    "name": "Mixed Grip Chin",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Using a spacing that is just about 1 inch wider than shoulder width, grab a pull-up bar with the palms of one hand facing forward and the palms of the other hand facing towards you. This will be your starting position.\nNow start to pull yourself up as you exhale. Tip: With the arm that has the palms facing up concentrate on using the back muscles in order to perform the movement. The elbow of that arm should remain close to the torso. With the other arm that has the palms facing forward, the elbows will be away but in line with the torso. You will concentrate on using the lats to pull your body up.\nAfter a second contraction at the top, start to slowly come down as you inhale.\nRepeat for the recommended amount of repetitions.\nOn the following set, switch grips; so if you had the right hand with the palms facing you and the left one with the palms facing forward, on the next set you will have the palms facing forward for the right hand and facing you for the left.",
    "images": [
      "Mixed_Grip_Chin/0.jpg",
      "Mixed_Grip_Chin/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Monster_Walk",
    "name": "Monster Walk",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "Place a band around both ankles and another around both knees. There should be enough tension that they are tight when your feet are shoulder width apart.\nTo begin, take short steps forward alternating your left and right foot.\nAfter several steps, do just the opposite and walk backward to where you started.",
    "images": [
      "Monster_Walk/0.jpg",
      "Monster_Walk/1.jpg"
    ],
    "primaryMuscles": [
      "abductors"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Muscle_Up",
    "name": "Muscle Up",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Grip the rings using a false grip, with the base of your palms on top of the rings. Initiate a pull up by pulling the elbows down to your side, flexing the elbows.\nAs you reach the top position of the pull-up, pull the rings to your armpits as you roll your shoulders forward, allowing your elbows to move straight back behind you. This puts you into the proper position to continue into the dip portion of the movement.\nMaintaining control and stability, extend through the elbow to complete the motion.\nUse care when lowering yourself to the ground.",
    "images": [
      "Muscle_Up/0.jpg",
      "Muscle_Up/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "abdominals",
      "biceps",
      "forearms",
      "middle back",
      "shoulders",
      "traps",
      "triceps"
    ]
  },
  {
    "id": "Narrow_Stance_Hack_Squats",
    "name": "Narrow Stance Hack Squats",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Place the back of your torso against the back pad of the machine and hook your shoulders under the shoulder pads provided.\nPosition your legs in the platform using a less than shoulder width narrow stance with the toes slightly pointed out. Your feet should be around 3 inches or less apart. Tip: Keep your head up at all times and also maintain the back on the pad at all times.\nPlace your arms on the side handles of the machine and disengage the safety bars (which on most designs is done by moving the side handles from a facing front position to a diagonal position).\nNow straighten your legs without locking the knees. This will be your starting position.\nBegin to slowly lower the unit by bending the knees as you maintain a straight posture with the head up (back on the pad at all times). Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement.\nBegin to raise the unit as you exhale by pushing the floor with mainly with the heels of your feet as you straighten the legs again and go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Narrow_Stance_Hack_Squats/0.jpg",
      "Narrow_Stance_Hack_Squats/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Narrow_Stance_Leg_Press",
    "name": "Narrow Stance Leg Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a less-than-shoulder-width narrow stance with the toes slightly pointed out. Your feet should be around 3 inches or less apart. Tip: Keep your head up at all times and also maintain the back on the pad at all times.\nLower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you. Tip: Make sure that you do not lock your knees. Your torso and the legs should make a perfect 90-degree angle. This will be your starting position.\nAs you inhale, slowly lower the platform until your upper and lower legs make a 90-degree angle.\nPushing mainly with the heels of your feet and using the quadriceps go back to the starting position as you exhale.\nRepeat for the recommended amount of repetitions and ensure to lock the safety pins properly once you are done. You do not want that platform falling on you fully loaded.",
    "images": [
      "Narrow_Stance_Leg_Press/0.jpg",
      "Narrow_Stance_Leg_Press/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Narrow_Stance_Squats",
    "name": "Narrow Stance Squats",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\nHold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a less-than-shoulder-width narrow stance with the toes slightly pointed out. Feet should be around 3-6 inches apart. Keep your head up at all times (looking down will get you off balance) and maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section).\nBegin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the bar as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again and go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Narrow_Stance_Squats/0.jpg",
      "Narrow_Stance_Squats/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Natural_Glute_Ham_Raise",
    "name": "Natural Glute Ham Raise",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Using the leg pad of a lat pulldown machine or a preacher bench, position yourself so that your ankles are under the pads, knees on the seat, and you are facing away from the machine. You should be upright and maintaining good posture.\nThis will be your starting position. Lower yourself under control until your knees are almost completely straight.\nRemaining in control, raise yourself back up to the starting position.\nIf you are unable to complete a rep, use a band, a partner, or push off of a box to aid in completing a repetition.",
    "images": [
      "Natural_Glute_Ham_Raise/0.jpg",
      "Natural_Glute_Ham_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "lower back"
    ]
  },
  {
    "id": "Neck_Press",
    "name": "Neck Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie back on a flat bench. Using a medium-width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over your neck with your arms locked. This will be your starting position.\nAs you breathe in, come down slowly until you feel the bar on your neck.\nAfter a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up).\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the bar back in the rack.",
    "images": [
      "Neck_Press/0.jpg",
      "Neck_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Oblique_Crunches",
    "name": "Oblique Crunches",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Lie flat on the floor with your lower back pressed to the ground. For this exercise, you will need to put one hand beside your head and the other to the side against the floor.\nMake sure your feet are elevated and resting on a flat surface.\nNow lift the shoulder in which your hand is touching your head.\nSimply elevate your shoulder and body upward until you touch your knee. For example, if you have your right hand besides your head, then you want to elevate your body upwards until your right elbow touches your left knee. The same variation can be applied doing the inverse and using your left elbow to touch your right knee.\nAfter your knee touches your elbow, lower your body until you have reached the starting position.\nRemember to breathe in during the eccentric (lowering) part of the exercise and to breathe out during the concentric (upward) part of the exercise.\nContinue alternating in this manner until all of the recommended repetitions for each side have been completed.",
    "images": [
      "Oblique_Crunches/0.jpg",
      "Oblique_Crunches/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Oblique_Crunches_-_On_The_Floor",
    "name": "Oblique Crunches - On The Floor",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Start out by lying on your right side with your legs lying on top of each other. Make sure your knees are bent a little bit.\nPlace your left hand behind your head.\nOnce you are in this set position, begin by moving your left elbow up as you would perform a normal crunch except this time the main emphasis is on your obliques.\nCrunch as high as you can, hold the contraction for a second and then slowly drop back down into the starting position.\nRemember to breathe in during the eccentric (lowering) part of the exercise and to breathe out during the concentric (elevation) part of the exercise.",
    "images": [
      "Oblique_Crunches_-_On_The_Floor/0.jpg",
      "Oblique_Crunches_-_On_The_Floor/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "One-Arm_Dumbbell_Row",
    "name": "One-Arm Dumbbell Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Choose a flat bench and place a dumbbell on each side of it.\nPlace the right leg on top of the end of the bench, bend your torso forward from the waist until your upper body is parallel to the floor, and place your right hand on the other end of the bench for support.\nUse the left hand to pick up the dumbbell on the floor and hold the weight while keeping your lower back straight. The palm of the hand should be facing your torso. This will be your starting position.\nPull the resistance straight up to the side of your chest, keeping your upper arm close to your side and keeping the torso stationary. Breathe out as you perform this step. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. Also, make sure that the force is performed with the back muscles and not the arms. Finally, the upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the dumbbell; therefore do not try to pull the dumbbell up using the forearms.\nLower the resistance straight down to the starting position. Breathe in as you perform this step.\nRepeat the movement for the specified amount of repetitions.\nSwitch sides and repeat again with the other arm.",
    "images": [
      "One-Arm_Dumbbell_Row/0.jpg",
      "One-Arm_Dumbbell_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "One-Arm_Flat_Bench_Dumbbell_Flye",
    "name": "One-Arm Flat Bench Dumbbell Flye",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie down on a flat bench with a dumbbell in one hand resting on top of your thigh. The palm of your hand with the dumbbell in it should be at a neutral grip.\nBy using your thighs to help you get the dumbbell up, clean the dumbbell so that you can hold it in front of you with your lifting arm being fully extended. Remember to maintain a neutral grip with this exercise. Your non lifting hand should be to the side holding the flat bench for better support. This will be your starting position.\nYour arm with the weight should have a slight bend on your elbow in order to prevent stress at the biceps tendon. Begin by lowering your arm with the weight in it out in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, your lifting arm should remain stationary; the movement should only occur at the shoulder joint.\nReturn your lifting arm back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights.\nHold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.\nSwitch arms and repeat the exercise.",
    "images": [
      "One-Arm_Flat_Bench_Dumbbell_Flye/0.jpg",
      "One-Arm_Flat_Bench_Dumbbell_Flye/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "One-Arm_High-Pulley_Cable_Side_Bends",
    "name": "One-Arm High-Pulley Cable Side Bends",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Connect a standard handle to a tower. Move cable to highest pulley position.\nStand with side to cable. With one hand, reach up and grab handle with underhand grip.\nPull down cable until elbow touches your side and the handle is by your shoulder.\nPosition feet hip-width apart. Place free hand on hip to help gauge pivot point.\nKeep arm in static position. Contract oblique to bring the weight down in a side crunch.\nOnce you reach maximum contraction, slowly release the weight to the starting position. The weight stack should never be unloaded in a resting position. The aim is constant tension during the set.\nRepeat to failure.\nThen, reposition and repeat the same series of movements on the opposite side.",
    "images": [
      "One-Arm_High-Pulley_Cable_Side_Bends/0.jpg",
      "One-Arm_High-Pulley_Cable_Side_Bends/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "One-Arm_Incline_Lateral_Raise",
    "name": "One-Arm Incline Lateral Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie down sideways on an incline bench press with a dumbbell in the hand. Make sure the shoulder is pressing against the incline bench and the arm is lying across your body with the palm around your navel.\nHold a dumbbell in your uppermost arm while keeping it extended in front of you parallel to the floor. This is your starting position.\nWhile keeping the dumbbell parallel to the floor at all times, perform a lateral raise. Your arm should travel straight up until it is pointing at the ceiling. Tip: Exhale as you perform this movement. Hold the dumbbell in the position and feel the contraction in the shoulders for a second.\nWhile inhaling lower the weight across your body back into the starting position.\nRepeat the movement for the prescribed amount of repetitions.\nSwitch arms and repeat the movement.",
    "images": [
      "One-Arm_Incline_Lateral_Raise/0.jpg",
      "One-Arm_Incline_Lateral_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "One-Arm_Kettlebell_Clean",
    "name": "One-Arm Kettlebell Clean",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place a kettlebell between your feet. As you bend down to grab the kettlebell, push your butt back and keep your eyes looking forward.\nClean the kettlebell to your shoulders by extending through the legs and hips as you raise the kettlebell towards your shoulder. The wrist should rotate as you do so.\nReturn the weight to the starting position.",
    "images": [
      "One-Arm_Kettlebell_Clean/0.jpg",
      "One-Arm_Kettlebell_Clean/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "glutes",
      "lower back",
      "shoulders",
      "traps"
    ]
  },
  {
    "id": "One-Arm_Kettlebell_Clean_and_Jerk",
    "name": "One-Arm Kettlebell Clean and Jerk",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Hold a kettlebell by the handle.\nClean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward.\nDip your body by bending the knees, keeping your torso upright.\nImmediately reverse direction, driving through the heels, in essence jumping to create momentum. As you do so, press the kettlebell overhead to lockout by extending the arms, using your body's momentum to move the weight.\nReceive the weight overhead by returning to a squat position underneath the weight.\nKeeping the weight overhead, return to a standing position. Lower the weight to the floor to perform the next repetition.",
    "images": [
      "One-Arm_Kettlebell_Clean_and_Jerk/0.jpg",
      "One-Arm_Kettlebell_Clean_and_Jerk/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "One-Arm_Kettlebell_Floor_Press",
    "name": "One-Arm Kettlebell Floor Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Lie on the floor holding a kettlebell with one hand, with your upper arm supported by the floor. The palm should be facing in.\nPress the kettlebell straight up toward the ceiling, rotating your wrist.\nLower the kettlebell back to the starting position and repeat.",
    "images": [
      "One-Arm_Kettlebell_Floor_Press/0.jpg",
      "One-Arm_Kettlebell_Floor_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "One-Arm_Kettlebell_Jerk",
    "name": "One-Arm Kettlebell Jerk",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Hold a kettlebell by the handle. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward. This will be your starting position.\nDip your body by bending the knees, keeping your torso upright.\nImmediately reverse direction, driving through the heels, in essence jumping to create momentum. As you do so, press the kettlebell overhead to lockout by extending the arms, using your body's momentum to move the weight. Receive the weight overhead by returning to a squat position underneath the weight. Keeping the weight overhead, return to a standing position.\nLower the weight to perform the next repetition.",
    "images": [
      "One-Arm_Kettlebell_Jerk/0.jpg",
      "One-Arm_Kettlebell_Jerk/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "calves",
      "quadriceps",
      "triceps"
    ]
  },
  {
    "id": "One-Arm_Kettlebell_Military_Press_To_The_Side",
    "name": "One-Arm Kettlebell Military Press To The Side",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean a kettlebell to your shoulder. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces inward. This will be your starting position.\nLook at the kettlebell and press it up and out until it is locked out overhead.\nLower the kettlebell back to your shoulder under control and repeat. Make sure to contract your lat, butt, and stomach forcefully for added stability and strength.",
    "images": [
      "One-Arm_Kettlebell_Military_Press_To_The_Side/0.jpg",
      "One-Arm_Kettlebell_Military_Press_To_The_Side/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "One-Arm_Kettlebell_Para_Press",
    "name": "One-Arm Kettlebell Para Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean a kettlebell to your shoulder. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward. This will be your starting position.\nHold the kettlebell with the elbow out to the side, and press it up and out until it is locked out overhead.\nLower the kettlebell back to your shoulder under control and repeat. Make sure to contract your lat, butt, and stomach forcefully for added stability and strength.",
    "images": [
      "One-Arm_Kettlebell_Para_Press/0.jpg",
      "One-Arm_Kettlebell_Para_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "One-Arm_Kettlebell_Push_Press",
    "name": "One-Arm Kettlebell Push Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Hold a kettlebell by the handle. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward. This will be your starting position.\nDip your body by bending the knees, keeping your torso upright.\nImmediately reverse direction, driving through the heels, in essence jumping to create momentum. As you do so, press the kettlebell overhead to lockout by extending the arms, using your body's momentum to move the weight. Lower the weight to perform the next repetition.",
    "images": [
      "One-Arm_Kettlebell_Push_Press/0.jpg",
      "One-Arm_Kettlebell_Push_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "calves",
      "quadriceps",
      "triceps"
    ]
  },
  {
    "id": "One-Arm_Kettlebell_Row",
    "name": "One-Arm Kettlebell Row",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place a kettlebell in front of your feet. Bend your knees slightly and then push your butt out as much as possible as you bend over to get in the starting position. Grab the kettlebell and pull it to your stomach, retracting your shoulder blade and flexing the elbow. Keep your back straight. Lower and repeat.",
    "images": [
      "One-Arm_Kettlebell_Row/0.jpg",
      "One-Arm_Kettlebell_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "One-Arm_Kettlebell_Snatch",
    "name": "One-Arm Kettlebell Snatch",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place a kettlebell between your feet. Bend your knees and push your butt back to get in the proper starting position.\nLook straight ahead and swing the kettlebell back between your legs.\nImmediately reverse the direction and drive through with your hips and knees, accelerating the kettlebell upward. As the kettlebell rises to your shoulder rotate your hand and punch straight up, using momentum to receive the weight locked out overhead.",
    "images": [
      "One-Arm_Kettlebell_Snatch/0.jpg",
      "One-Arm_Kettlebell_Snatch/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back",
      "traps",
      "triceps"
    ]
  },
  {
    "id": "One-Arm_Kettlebell_Split_Jerk",
    "name": "One-Arm Kettlebell Split Jerk",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Hold a kettlebell by the handle. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward. This will be your starting position.\nDip your body by bending the knees, keeping your torso upright.\nImmediately reverse direction, driving through the heels, in essence jumping to create momentum. As you do so, press the kettlebell overhead to lockout by extending the arms, using your body's momentum to move the weight.\nReceive the weight overhead by returning to a squat position underneath the weight, positioning one leg in front of you and one leg behind you.\nKeeping the weight overhead, return to a standing position and bring your feet together. Lower the weight to perform the next repetition.",
    "images": [
      "One-Arm_Kettlebell_Split_Jerk/0.jpg",
      "One-Arm_Kettlebell_Split_Jerk/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings",
      "quadriceps",
      "triceps"
    ]
  },
  {
    "id": "One-Arm_Kettlebell_Split_Snatch",
    "name": "One-Arm Kettlebell Split Snatch",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Hold a kettlebell in one hand by the handle.\nSquat towards the floor, and then reverse the motion, extending the hips, knees, and finally the ankles, to raise the kettlebell overhead.\nAfter fully extending the body, descend into a lunge position to receive the weights overhead, one leg forward and one leg back. Ensure you drive through with your hips and lock the ketttlebells overhead in one uninterrupted motion.\nReturn to a standing position, holding the weight overhead, and bring the feet together. Lower the weight to return to the starting position.",
    "images": [
      "One-Arm_Kettlebell_Split_Snatch/0.jpg",
      "One-Arm_Kettlebell_Split_Snatch/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "quadriceps"
    ]
  },
  {
    "id": "One-Arm_Kettlebell_Swings",
    "name": "One-Arm Kettlebell Swings",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "",
    "images": [
      "One-Arm_Kettlebell_Swings/0.jpg",
      "One-Arm_Kettlebell_Swings/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "lower back",
      "shoulders"
    ]
  },
  {
    "id": "One-Arm_Long_Bar_Row",
    "name": "One-Arm Long Bar Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end.\nStand next to the bar, and take a grip with one hand close to the collar. Using your hips and legs, rise to a standing position.\nAssume a bent-knee stance with your hips back and your chest up. Your arm should be extended. This will be your starting position.\nPull the weight to your side by retracting the shoulder and flexing the elbow. Do not jerk the weight or cheat during the movement.\nAfter a brief pause, return to the starting position.",
    "images": [
      "One-Arm_Long_Bar_Row/0.jpg",
      "One-Arm_Long_Bar_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "One-Arm_Medicine_Ball_Slam",
    "name": "One-Arm Medicine Ball Slam",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "medicine ball",
    "instructions": "Start in a standing position with a staggered, athletic stance. Hold a medicine ball in one hand, on the same side as your back leg. This will be your starting position.\nBegin by winding the arm, raising the medicine ball above your head. As you do so, extend through the hips, knees, and ankles to load up for the slam.\nAt peak extension, flex the shoulders, spine, and hips to throw the ball hard into the ground directly in front of you.\nCatch the ball on the bounce and continue for the desired number of repetitions.",
    "images": [
      "One-Arm_Medicine_Ball_Slam/0.jpg",
      "One-Arm_Medicine_Ball_Slam/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "One-Arm_Open_Palm_Kettlebell_Clean",
    "name": "One-Arm Open Palm Kettlebell Clean",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place one kettlebell between your feet.\nGrab the handle with one hand and raise the kettlebell rapidly, let it flip so that the ball of the kettlebell lands in the palm of your hand.\nThrow the kettlebell out in front of you and catch the handle with one hand.\nTake the kettlebell to the floor and repeat. Make sure to work both arms.",
    "images": [
      "One-Arm_Open_Palm_Kettlebell_Clean/0.jpg",
      "One-Arm_Open_Palm_Kettlebell_Clean/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "forearms",
      "glutes",
      "lower back",
      "quadriceps",
      "shoulders"
    ]
  },
  {
    "id": "One-Arm_Overhead_Kettlebell_Squats",
    "name": "One-Arm Overhead Kettlebell Squats",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean and press a kettlebell with one arm. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so. Press the weight overhead by extending through the elbow.This will be your starting position.\nLooking straight ahead and keeping a kettlebell locked out above you, flex the knees and hips and lower your torso between your legs, keeping your head and chest up.\nPause at the bottom position for a second before rising back to the top, driving through the heels of your feet.",
    "images": [
      "One-Arm_Overhead_Kettlebell_Squats/0.jpg",
      "One-Arm_Overhead_Kettlebell_Squats/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "shoulders"
    ]
  },
  {
    "id": "One-Arm_Side_Deadlift",
    "name": "One-Arm Side Deadlift",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Stand to the side of a barbell next to its center. Bend your knees and lower your body until you are able to reach the barbell.\nGrasp the bar as if you were grabbing a briefcase (palms facing you since the bar is sideways). You may need a wrist wrap if you are using a significant amount of weight. This is your starting position.\nUse your legs to help lift the barbell up while exhaling. Your arms should extend fully as bring the barbell up until you are in a standing position.\nSlowly bring the barbell back down while inhaling. Tip: Make sure to bend your knees while lowering the weight to avoid any injury from occurring.\nRepeat for the recommended amount of repetitions.\nSwitch arms and repeat the movement.",
    "images": [
      "One-Arm_Side_Deadlift/0.jpg",
      "One-Arm_Side_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "abdominals",
      "calves",
      "glutes",
      "hamstrings",
      "lower back",
      "traps"
    ]
  },
  {
    "id": "One-Arm_Side_Laterals",
    "name": "One-Arm Side Laterals",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Pick a dumbbell and place it in one of your hands. Your non lifting hand should be used to grab something steady such as an incline bench press. Lean towards your lifting arm and away from the hand that is gripping the incline bench as this will allow you to keep your balance.\nStand with a straight torso and have the dumbbell by your side at arm's length with the palm of the hand facing you. This will be your starting position.\nWhile maintaining the torso stationary (no swinging), lift the dumbbell to your side with a slight bend on the elbow and your hand slightly tilted forward as if pouring water in a glass. Continue to go up until you arm is parallel to the floor. Exhale as you execute this movement and pause for a second at the top.\nLower the dumbbell back down slowly to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.\nSwitch arms and repeat the exercise.",
    "images": [
      "One-Arm_Side_Laterals/0.jpg",
      "One-Arm_Side_Laterals/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "One-Legged_Cable_Kickback",
    "name": "One-Legged Cable Kickback",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Hook a leather ankle cuff to a low cable pulley and then attach the cuff to your ankle.\nFace the weight stack from a distance of about two feet, grasping the steel frame for support.\nWhile keeping your knees and hips bent slightly and your abs tight, contract your glutes to slowly \"kick\" the working leg back in a semicircular arc as high as it will comfortably go as you breathe out. Tip: At full extension, squeeze your glutes for a second in order to achieve a peak contraction.\nNow slowly bring your working leg forward, resisting the pull of the cable until you reach the starting position.\nRepeat for the recommended amount of repetitions.\nSwitch legs and repeat the movement for the other side.",
    "images": [
      "One-Legged_Cable_Kickback/0.jpg",
      "One-Legged_Cable_Kickback/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings"
    ]
  },
  {
    "id": "One_Arm_Chin-Up",
    "name": "One Arm Chin-Up",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "For this exercise, start out by placing a towel around a chin up bar.\nGrab the chin-up bar with your palm facing you. One hand will be grabbing the chin-up bar and the other will be grabbing the towel.\nBring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.v\nPull your torso up until the bar touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar.\nAfter a second on the contracted position, start to inhale and slowly lower your torso back to the starting position when your arms are fully extended and the lats are fully stretched.\nRepeat this motion for the prescribed amount of repetitions.\nSwitch arms and repeat the movement.",
    "images": [
      "One_Arm_Chin-Up/0.jpg",
      "One_Arm_Chin-Up/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "forearms",
      "lats"
    ]
  },
  {
    "id": "One_Arm_Dumbbell_Bench_Press",
    "name": "One Arm Dumbbell Bench Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Lie down on a flat bench with a dumbbell in one hand on top of your thigh.\nBy using your thigh to help you get the dumbbell up, clean the dumbbell up so that you can hold it in front of you at shoulder width. Use the hand you are not lifting with to help position the dumbbell over you properly.\nOnce at shoulder width, rotate your wrist forward so that the palm of your hand is facing away from you. This will be your starting position.\nBring down the weights slowly to your side as you breathe in. Keep full control of the dumbbell at all times. Tip: Use the hand that you are not lifting with to help keep the dumbbell balance as you may struggle a bit at first. Only use your non-lifting hand if it is needed. Otherwise, keep it resting to the side.\nAs you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions of your training program.\nSwitch arms and repeat the movement.",
    "images": [
      "One_Arm_Dumbbell_Bench_Press/0.jpg",
      "One_Arm_Dumbbell_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "One_Arm_Dumbbell_Preacher_Curl",
    "name": "One Arm Dumbbell Preacher Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Grab a dumbbell with the right arm and place the upper arm on top of the preacher bench or the incline bench. The dumbbell should be held at shoulder length. This will be your starting position.\nAs you breathe in, slowly lower the dumbbell until your upper arm is extended and the biceps is fully stretched.\nAs you exhale, use the biceps to curl the weight up until your biceps is fully contracted and the dumbbell is at shoulder height. Again, remember that to ensure full contraction you need to bring that small finger higher than the thumb.\nSqueeze the biceps hard for a second at the contracted position and repeat for the recommended amount of repetitions.\nSwitch arms and repeat the movement.",
    "images": [
      "One_Arm_Dumbbell_Preacher_Curl/0.jpg",
      "One_Arm_Dumbbell_Preacher_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "One_Arm_Floor_Press",
    "name": "One Arm Floor Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie down on a flat surface with your back pressing against the floor or an exercise mat. Make sure your knees are bent.\nHave a partner hand you the bar on one hand. When starting, your arm should be just about fully extended, similar to the starting position of a barbell bench press. However, this time your grip will be neutral (palms facing your torso).\nMake sure the hand you are not using to lift the weight is placed by your side.\nBegin the exercise by lowering the barbell until your elbow touches the ground. Make sure to breathe in as this is the eccentric (lowering part of the exercise).\nThen start lifting the barbell back up to the original starting position. Remember to breathe out during the concentric (lifting part of the exercise).\nRepeat until you have performed your recommended repetitions.\nSwitch arms and repeat the movement.",
    "images": [
      "One_Arm_Floor_Press/0.jpg",
      "One_Arm_Floor_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "One_Arm_Lat_Pulldown",
    "name": "One Arm Lat Pulldown",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Select an appropriate weight and adjust the knee pad to help keep you down. Grasp the handle with a pronated grip. This will be your starting position.\nPull the handle down, squeezing your elbow to your side as you flex the elbow.\nPause at the bottom of the motion, and then slowly return the handle to the starting position.\nFor multiple repetitions, avoid completely returning the weight to keep tension on the muscles being worked.",
    "images": [
      "One_Arm_Lat_Pulldown/0.jpg",
      "One_Arm_Lat_Pulldown/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back"
    ]
  },
  {
    "id": "One_Arm_Pronated_Dumbbell_Triceps_Extension",
    "name": "One Arm Pronated Dumbbell Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie flat on a bench while holding a dumbbell at arms length. Your arm should be perpendicular to your body. The palm of your hand should be facing towards your feet as a pronated grip is required to perform this exercise.\nPlace your non lifting hand on your bicep for support.\nSlowly begin to lower the dumbbell down as you breathe in.\nThen, begin lifting the dumbbell upward as you contract the triceps. Remember to breathe out during the concentric (lifting part of the exercise).\nRepeat until you have performed your set repetitions.\nSwitch arms and repeat the movement.",
    "images": [
      "One_Arm_Pronated_Dumbbell_Triceps_Extension/0.jpg",
      "One_Arm_Pronated_Dumbbell_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "One_Arm_Supinated_Dumbbell_Triceps_Extension",
    "name": "One Arm Supinated Dumbbell Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie flat on a bench while holding a dumbbell at arms length. Your arm should be perpendicular to your body. The palm of your hand should be facing towards your face as a supinated grip is required to perform this exercise.\nPlace your non lifting hand on your bicep for support.\nSlowly begin to lower the dumbbell down as you breathe in.\nThen, begin lifting the dumbbell upward as you contract the triceps. Remember to breathe out during the concentric (lifting part of the exercise).\nRepeat until you have performed your set repetitions.\nSwitch arms and repeat the movement.\nSwitch arms again and repeat the movement.",
    "images": [
      "One_Arm_Supinated_Dumbbell_Triceps_Extension/0.jpg",
      "One_Arm_Supinated_Dumbbell_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "One_Leg_Barbell_Squat",
    "name": "One Leg Barbell Squat",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Start by standing about 2 to 3 feet in front of a flat bench with your back facing the bench. Have a barbell in front of you on the floor. Tip: Your feet should be shoulder width apart from each other.\nBend the knees and use a pronated grip with your hands being wider than shoulder width apart from each other to lift the barbell up until you can rest it on your chest.\nThen lift the barbell over your head and rest it on the base of your neck. Move one foot back so that your toe is resting on the flat bench. Your other foot should be stationary in front of you. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. Tip: Make sure your back is straight and chest is out while performing this exercise.\nAs you inhale, slowly lower your leg until your thigh is parallel to the floor. At this point, your knee should be over your toes. Your chest should be directly above the middle of your thigh.\nLeading with the chest and hips and contracting the quadriceps, elevate your leg back to the starting position as you exhale.\nRepeat for the recommended amount of repetitions.\nSwitch legs and repeat the movement.",
    "images": [
      "One_Leg_Barbell_Squat/0.jpg",
      "One_Leg_Barbell_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Open_Palm_Kettlebell_Clean",
    "name": "Open Palm Kettlebell Clean",
    "category": "strength",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place one kettlebell between your feet. Clean the kettlebell by extending through the legs and hips as you raise the kettlebell towards your shoulders.\nRelease the kettlebell as it comes up, and let it flip so that the ball of the kettlebell lands in the palms of your hands.\nRelease the kettlebell out in front of you and catch the handle with both hands. Lower the kettlebell to the starting position and repeat.",
    "images": [
      "Open_Palm_Kettlebell_Clean/0.jpg",
      "Open_Palm_Kettlebell_Clean/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "glutes",
      "lower back",
      "quadriceps",
      "shoulders"
    ]
  },
  {
    "id": "Otis-Up",
    "name": "Otis-Up",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Secure your feet and lay back on the floor. Your knees should be bent. Hold a weight with both hands to your chest. This will be your starting position.\nInitiate the movement by flexing the hips and spine to raise your torso up from the ground.\nAs you move up, press the weight up so that it is above your head at the top of the movement.\nReturn the weight to your chest as you reverse the sit-up motion, ensuring not to go all the way down to the floor.",
    "images": [
      "Otis-Up/0.jpg",
      "Otis-Up/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Overhead_Cable_Curl",
    "name": "Overhead Cable Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "To begin, set a weight that is comfortable on each side of the pulley machine. Note: Make sure that the amount of weight selected is the same on each side.\nNow adjust the height of the pulleys on each side and make sure that they are positioned at a height higher than that of your shoulders.\nStand in the middle of both sides and use an underhand grip (palms facing towards the ceiling) to grab each handle. Your arms should be fully extended and parallel to the floor with your feet positioned shoulder width apart from each other. Your body should be evenly aligned the handles. This is the starting position.\nWhile exhaling, slowly squeeze the biceps on each side until your forearms and biceps touch.\nWhile inhaling, move your forearms back to the starting position. Note: Your entire body is stationary during this exercise except for the forearms.\nRepeat for the recommended amount of repetitions prescribed in your program.",
    "images": [
      "Overhead_Cable_Curl/0.jpg",
      "Overhead_Cable_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Pallof_Press",
    "name": "Pallof Press",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Connect a standard handle to a tower, and—if possible—position the cable to shoulder height. If not, a low pulley will suffice.\nWith your side to the cable, grab the handle with both hands and step away from the tower. You should be approximately arm's length away from the pulley, with the tension of the weight on the cable.\nWith your feet positioned hip-width apart and knees slightly bent, hold the cable to the middle of your chest. This will be your starting position.\nPress the cable away from your chest, fully extending both arms. You core should be tight and engaged.\nHold the repetition for several seconds before returning to the starting position.\nAt the conclusion of the set, repeat facing the other direction.",
    "images": [
      "Pallof_Press/0.jpg",
      "Pallof_Press/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Pallof_Press_With_Rotation",
    "name": "Pallof Press With Rotation",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Connect a standard handle to a tower, and position the cable to shoulder height.\nWith your side to the cable, grab the handle with one hand and step away from the tower. You should be approximately arm's length away from the pulley, with the tension of the weight on the cable. Align outstretched arm with cable.\nWith your feet positioned hip-width apart, pull the cable into your chest and grab the handle with your other hand. Both hands should be on the handle at this time.\nFacing forward, press the cable away from your chest. You core should be tight and engaged.\nKeeping your hips straight, twist your torso away from the pulley until you get a full quarter rotation.\nMaintain your rigid stance and straight arms. Return to the neutral position in a slow and controlled manner. Your arms should be extended in front of you.\nWith the side tension still engaging your core, bring your hands to your chest and immediately press outward to a fully extended position. This constitutes one rep.\nRepeat to failure.\nThen, reposition and repeat the same series of movements on the opposite side.",
    "images": [
      "Pallof_Press_With_Rotation/0.jpg",
      "Pallof_Press_With_Rotation/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Palms-Down_Dumbbell_Wrist_Curl_Over_A_Bench",
    "name": "Palms-Down Dumbbell Wrist Curl Over A Bench",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Start out by placing two dumbbells on one side of a flat bench.\nKneel down on both of your knees so that your body is facing the flat bench.\nUse your arms to grab both of the dumbbells with a pronated grip (palms facing down) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge.\nStart out by curling your wrist upwards and exhaling.\nSlowly lower your wrists back down to the starting position while inhaling.\nYour forearms should be stationary as your wrist is the only movement needed to perform this exercise.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Palms-Down_Dumbbell_Wrist_Curl_Over_A_Bench/0.jpg",
      "Palms-Down_Dumbbell_Wrist_Curl_Over_A_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Palms-Down_Wrist_Curl_Over_A_Bench",
    "name": "Palms-Down Wrist Curl Over A Bench",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Start out by placing a barbell on one side of a flat bench.\nKneel down on both of your knees so that your body is facing the flat bench.\nUse your arms to grab the barbell with a pronated grip (palms down) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge.\nStart out by curling your wrist upwards and exhaling.\nSlowly lower your wrists back down to the starting position while inhaling.\nYour forearms should be stationary as your wrist is the only movement needed to perform this exercise.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Palms-Down_Wrist_Curl_Over_A_Bench/0.jpg",
      "Palms-Down_Wrist_Curl_Over_A_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Palms-Up_Barbell_Wrist_Curl_Over_A_Bench",
    "name": "Palms-Up Barbell Wrist Curl Over A Bench",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Start out by placing a barbell on one side of a flat bench.\nKneel down on both of your knees so that your body is facing the flat bench.\nUse your arms to grab the barbell with a supinated grip (palms up) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge.\nStart out by curling your wrist upwards and exhaling.\nSlowly lower your wrists back down to the starting position while inhaling.\nYour forearms should be stationary as your wrist is the only movement needed to perform this exercise.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Palms-Up_Barbell_Wrist_Curl_Over_A_Bench/0.jpg",
      "Palms-Up_Barbell_Wrist_Curl_Over_A_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Palms-Up_Dumbbell_Wrist_Curl_Over_A_Bench",
    "name": "Palms-Up Dumbbell Wrist Curl Over A Bench",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Start out by placing two dumbbells on one side of a flat bench.\nKneel down on both of your knees so that your body is facing the flat bench.\nUse your arms to grab both of the dumbbells with a supinated grip (palms up) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge.\nStart out by curling your wrist upwards and exhaling.\nSlowly lower your wrists back down to the starting position while inhaling. Make sure to inhale during this part of the exercise.\nYour forearms should be stationary as your wrist is the only movement needed to perform this exercise.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Palms-Up_Dumbbell_Wrist_Curl_Over_A_Bench/0.jpg",
      "Palms-Up_Dumbbell_Wrist_Curl_Over_A_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Parallel_Bar_Dip",
    "name": "Parallel Bar Dip",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Stand between a set of parallel bars. Place a hand on each bar, and then take a small jump to help you get into the starting position with your arms locked out.\nBegin by flexing the elbow, lowering your body until your arms break 90 degrees. Avoid swinging, and maintain good posture throughout the descent.\nReverse the motion by extending the elbow, pushing yourself back up into the starting position.\nRepeat for the desired number of repetitions.",
    "images": [
      "Parallel_Bar_Dip/0.jpg",
      "Parallel_Bar_Dip/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Physioball_Hip_Bridge",
    "name": "Physioball Hip Bridge",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "exercise ball",
    "instructions": "Lay on a ball so that your upper back is on the ball with your hips unsupported. Both feet should be flat on the floor, hip width apart or wider. This will be your starting position.\nBegin by extending the hips using your glutes and hamstrings, raising your hips upward as you bridge.\nPause at the top of the motion and return to the starting position.",
    "images": [
      "Physioball_Hip_Bridge/0.jpg",
      "Physioball_Hip_Bridge/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings"
    ]
  },
  {
    "id": "Pin_Presses",
    "name": "Pin Presses",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Pin presses remove the eccentric phase of the bench press, developing starting strength. They also allow you to train a desired range of motion.\nThe bench should be set up in a power rack. Set the pins to the desired point in your range of motion, whether it just be lockout or an inch off of your chest. The bar should be moved to the pins and prepared for lifting.\nBegin by lying on the bench, with the bar directly above the contact point during your regular bench. Tuck your feet underneath you and arch your back. Using the bar to help support your weight, lift your shoulder off the bench and retract them, squeezing the shoulder blades together. Use your feet to drive your traps into the bench. Maintain this tight body position throughout the movement.\nYou can take a standard bench grip, or shoulder width to focus on the triceps. The bar, wrist, and elbow should stay in line at all times. Focus on squeezing the bar and trying to pull it apart.\nDrive the bar up with as much force as possible. The elbows should be tucked in until lockout.\nReturn the bar to the pins, pausing before beginning the next repetition.",
    "images": [
      "Pin_Presses/0.jpg",
      "Pin_Presses/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "forearms",
      "lats",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Plank",
    "name": "Plank",
    "category": "strength",
    "force": "static",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder.\nKeep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised.",
    "images": [
      "Plank/0.jpg",
      "Plank/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Plate_Pinch",
    "name": "Plate Pinch",
    "category": "strength",
    "force": "static",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Grab two wide-rimmed plates and put them together with the smooth sides facing outward\nUse your fingers to grip the outside part of the plate and your thumb for the other side thus holding both plates together. This is the starting position.\nSqueeze the plate with your fingers and thumb. Hold this position for as long as you can.\nRepeat for the recommended amount of sets prescribed in your program.\nSwitch arms and repeat the movements.",
    "images": [
      "Plate_Pinch/0.jpg",
      "Plate_Pinch/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Plate_Twist",
    "name": "Plate Twist",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Lie down on the floor or an exercise mat with your legs fully extended and your upper body upright. Grab the plate by its sides with both hands out in front of your abdominals with your arms slightly bent.\nSlowly cross your legs near your ankles and lift them up off the ground. Your knees should also be bent slightly. Note: Move your upper body back slightly to help keep you balanced turning this exercise. This is the starting position.\nMove the plate to the left side and touch the floor with it. Breathe out as you perform that movement.\nCome back to the starting position as you breathe in and then repeat the movement but this time to the right side of the body. Tip: Use a slow controlled movement at all times. Jerking motions can injure the back.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Plate_Twist/0.jpg",
      "Plate_Twist/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Platform_Hamstring_Slides",
    "name": "Platform Hamstring Slides",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "For this movement a wooden floor or similar is needed. Lay on your back with your legs extended. Place a gym towel or a light weight underneath your heel. This will be your starting position.\nBegin the movement by flexing the knee, keeping your other leg straight.\nContinue bringing the heel closer to you, sliding it on the floor.\nAt full knee flexion, reverse the movement to return to the starting position.",
    "images": [
      "Platform_Hamstring_Slides/0.jpg",
      "Platform_Hamstring_Slides/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "glutes"
    ]
  },
  {
    "id": "Plie_Dumbbell_Squat",
    "name": "Plie Dumbbell Squat",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Hold a dumbbell at the base with both hands and stand straight up. Move your legs so that they are wider than shoulder width apart from each other with your knees slightly bent.\nYour toes should be facing out. Note: Your arms should be stationary while performing the exercise. This is the starting position.\nSlowly bend the knees and lower your legs until your thighs are parallel to the floor. Make sure to inhale as this is the eccentric part of the exercise.\nPress mainly with the heel of the foot to bring the body back to the starting position while exhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Plie_Dumbbell_Squat/0.jpg",
      "Plie_Dumbbell_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "abdominals",
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Plyo_Kettlebell_Pushups",
    "name": "Plyo Kettlebell Pushups",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place a kettlebell on the floor. Place yourself in a pushup position, on your toes with one hand on the ground and one hand holding the kettlebell, with your elbows extended. This will be your starting position.\nBegin by lowering yourself as low as you can, keeping your back straight.\nQuickly and forcefully reverse direction, pushing yourself up to the other side of the kettlebell, switching hands as you do so. Continue the movement by descending and repeating the movement back and forth.",
    "images": [
      "Plyo_Kettlebell_Pushups/0.jpg",
      "Plyo_Kettlebell_Pushups/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Power_Clean",
    "name": "Power Clean",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Stand with your feet slightly wider than shoulder width apart and toes pointing out slightly.\nSquat down and grasp bar with a closed, pronated grip. Your hands should be slightly wider than shoulder width apart outside knees with elbows fully extended.\nPlace the bar about 1 inch in front of your shins and over the balls of your feet.\nYour back should be flat or slightly arched, your chest held up and out and your shoulder blades should be retracted.\nKeep your head in a neutral position (in line with vertebral column and not tilted or rotated) with your eyes focused straight ahead. Inhale during this phase.\nLift the bar from the floor by forcefully extending the hips and the knees as you exhale. Tip: The upper torso should maintain the same angle. Do not bend at the waist yet and do not let the hips rise before the shoulders (this would have the effect of pushing the glutes in the air and stretching the hamstrings.\nKeep elbows fully extended with the head in a neutral position and the shoulders over the bar.\nAs the bar raises keep it as close to the shins as possible.\nAs the bar passes the knees, thrust your hips forward and slightly bend the knees to avoid locking them. Tip: At this point your thighs should be against the bar.\nKeep the back flat or slightly arched, elbows fully extended and your head neutral. Tip: You will hold your breath until the next phase.\nInhale and then forcefully and quickly extend your hips and knees and stand on your toes.\nKeep the bar as close to your body as possible. Tip: Your back should be flat with the elbows pointed out to the sides and your head in a neutral position. Also, keep your shoulders over the bar and arms straight as long as possible.\nWhen your lower body joints are fully extended, shrug the shoulders upward rapidly without letting the elbows flex yet. Exhale during this portion of the movement.\nAs the shoulders reach their highest elevation flex your elbows to begin pulling your body under the bar.\nContinue to pull the arms as high and as long as possible. Tip: Due to the explosive nature of this phase, your torso will be erect or with an arched back, your head will be tilted back slightly and your feet may lose contact with the floor.\nAfter the lower body has fully extended and the bar reaches near maximal height, pull your body under the bar and rotate the arms around and under the bar.\nSimultaneously, flex the hips and knees into a quarter squat position.\nOnce the arms are under the bar, inhale and then lift your elbows to position the upper arms parallel to the floor. Rack the bar across the front of your collar bones and front shoulder muscles.\nCatch the bar with an erect and tight torso, a neutral head position and flat feet. Exhale during this movement.\nStand up by extending the hips and knees to a fully erect position.\nLower the bar by gradually reducing the muscular tension of the arms to allow a controlled descent of the bar to the thighs. Inhale during this movement.\nSimultaneously flex the hips and knees to cushion the impact of the bar on the thighs.\nSquat down with the elbows fully extended until the bar touches the floor.\nStart over at Phase 1 and repeat for the recommended amount of repetitions.",
    "images": [
      "Power_Clean/0.jpg",
      "Power_Clean/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "forearms",
      "glutes",
      "lower back",
      "middle back",
      "quadriceps",
      "shoulders",
      "traps",
      "triceps"
    ]
  },
  {
    "id": "Power_Partials",
    "name": "Power Partials",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso.\nThe palms of the hands should be facing your torso. Your feet should be about shoulder width apart. This will be your starting position.\nKeeping your arms straight and the torso stationary, lift the weights out to your sides until they are about shoulder level height while exhaling.\nFeel the contraction for a second and begin to lower the weights back down to the starting position while inhaling. Tip: Keep the palms facing down with the little finger slightly higher while lifting and lowering the weights as it will concentrate the stress on your shoulders mainly.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Power_Partials/0.jpg",
      "Power_Partials/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Preacher_Curl",
    "name": "Preacher Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "To perform this movement you will need a preacher bench and an E-Z bar. Grab the E-Z curl bar at the close inner handle (either have someone hand you the bar which is preferable or grab the bar from the front bar rest provided by most preacher benches). The palm of your hands should be facing forward and they should be slightly tilted inwards due to the shape of the bar.\nWith the upper arms positioned against the preacher bench pad and the chest against it, hold the E-Z Curl Bar at shoulder length. This will be your starting position.\nAs you breathe in, slowly lower the bar until your upper arm is extended and the biceps is fully stretched.\nAs you exhale, use the biceps to curl the weight up until your biceps is fully contracted and the bar is at shoulder height. Squeeze the biceps hard and hold this position for a second.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Preacher_Curl/0.jpg",
      "Preacher_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Preacher_Hammer_Dumbbell_Curl",
    "name": "Preacher Hammer Dumbbell Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Place the upper part of both arms on top of the preacher bench as you hold a dumbbell in each hand with the palms facing each other (neutral grip).\nAs you breathe in, slowly lower the dumbbells until your upper arm is extended and the biceps is fully stretched.\nAs you exhale, use the biceps to curl the weight up until your biceps is fully contracted and the dumbbells are at shoulder height.\nSqueeze the biceps hard for a second at the contracted position and repeat for the recommended amount of repetitions.",
    "images": [
      "Preacher_Hammer_Dumbbell_Curl/0.jpg",
      "Preacher_Hammer_Dumbbell_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Press_Sit-Up",
    "name": "Press Sit-Up",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "To begin, lie down on a bench with a barbell resting on your chest. Position your legs so they are secure on the extension of the abdominal bench. This is the starting position.\nWhile inhaling, tighten your abdominals and glutes. Simultaneously curl your torso as you do when performing a sit-up and press the barbell to an overhead position while exhaling. Tip: Use your arms to push the barbell out as you perform this exercise while still focusing on the abdominal muscles.\nLower your upper body back down to the starting position while bringing the barbell back down to your torso. Remember to breathe in while lowering the body.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Press_Sit-Up/0.jpg",
      "Press_Sit-Up/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Prone_Manual_Hamstring",
    "name": "Prone Manual Hamstring",
    "category": "strength",
    "force": "static",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": null,
    "instructions": "You will need a partner for this exercise. Lay face down with your legs straight. Your assistant will place their hand on your heel.\nTo begin, flex the knee to curl your leg up. Your partner should provide resistance, starting light and increasing the pressure as the movement is completed. Communicate with your partner to monitor appropriate resistance levels.\nPause at the top, returning the leg to the starting position as your partner provides resistance going the other direction.",
    "images": [
      "Prone_Manual_Hamstring/0.jpg",
      "Prone_Manual_Hamstring/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Prowler_Sprint",
    "name": "Prowler Sprint",
    "category": "cardio",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Place your sled on an appropriate surface, loaded to a suitable weight. The sled should provide enough resistance to require effort, but not so heavy that you are significantly slowed down.\nYou may use the upright or the low handles for this exercise. Place your hands on the handles with your arms extended, leaning into the implement.\nWith good posture, drive through the ground with alternating, short steps. Move as fast as you can for a short distance.",
    "images": [
      "Prowler_Sprint/0.jpg",
      "Prowler_Sprint/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "chest",
      "glutes",
      "quadriceps",
      "shoulders"
    ]
  },
  {
    "id": "Pull_Through",
    "name": "Pull Through",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Begin standing a few feet in front of a low pulley with a rope or handle attached. Face away from the machine, straddling the cable, with your feet set wide apart.\nBegin the movement by reaching through your legs as far as possible, bending at the hips. Keep your knees slightly bent. Keeping your arms straight, extend through the hip to stand straight up. Avoid pulling upward through the shoulders; all of the motion should originate through the hips.",
    "images": [
      "Pull_Through/0.jpg",
      "Pull_Through/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Pullups",
    "name": "Pullups",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Grab the pull-up bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width.\nAs you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.\nPull your torso up until the bar touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar.\nAfter a second on the contracted position, start to inhale and slowly lower your torso back to the starting position when your arms are fully extended and the lats are fully stretched.\nRepeat this motion for the prescribed amount of repetitions.",
    "images": [
      "Pullups/0.jpg",
      "Pullups/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back"
    ]
  },
  {
    "id": "Push-Up_Wide",
    "name": "Push-Up Wide",
    "category": "strength",
    "force": null,
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "With your hands wide apart, support your body on your toes and hands in a plank position. Your elbows should be extended and your body straight. Do not allow your hips to sag. This will be your starting position.\nTo begin, allow the elbows to flex, lowering your chest to the floor as you inhale.\nUsing your pectoral muscles, press your upper body back up to the starting position by extending the elbows. Exhale as you perform this step.\nAfter pausing at the contracted position, repeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Push-Up_Wide/0.jpg",
      "Push-Up_Wide/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "abdominals",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Push-Ups_-_Close_Triceps_Position",
    "name": "Push-Ups - Close Triceps Position",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie on the floor face down and place your hands closer than shoulder width for a close hand position. Make sure that you are holding your torso up at arms' length.\nLower yourself until your chest almost touches the floor as you inhale.\nUsing your triceps and some of your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step.\nAfter a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Push-Ups_-_Close_Triceps_Position/0.jpg",
      "Push-Ups_-_Close_Triceps_Position/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Push-Ups_With_Feet_Elevated",
    "name": "Push-Ups With Feet Elevated",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie on the floor face down and place your hands about 36 inches apart from each other holding your torso up at arms length.\nPlace your toes on top of a flat bench. This will allow your body to be elevated. Note: The higher the elevation of the flat bench, the higher the resistance of the exercise is.\nLower yourself until your chest almost touches the floor as you inhale.\nUsing your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step.\nAfter a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Push-Ups_With_Feet_Elevated/0.jpg",
      "Push-Ups_With_Feet_Elevated/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Push-Ups_With_Feet_On_An_Exercise_Ball",
    "name": "Push-Ups With Feet On An Exercise Ball",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "exercise ball",
    "instructions": "Lie on the floor face down and place your hands about 36 inches apart from each other holding your torso up at arms length.\nPlace your toes on top of an exercise ball. This will allow your body to be elevated.\nLower yourself until your chest almost touches the floor as you inhale.\nUsing your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step.\nAfter a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Push-Ups_With_Feet_On_An_Exercise_Ball/0.jpg",
      "Push-Ups_With_Feet_On_An_Exercise_Ball/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Push_Up_to_Side_Plank",
    "name": "Push Up to Side Plank",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Get into pushup position on the toes with your hands just outside of shoulder width.\nPerform a pushup by allowing the elbows to flex. As you descend, keep your body straight.\nDo one pushup and as you come up, shift your weight on the left side of the body, twist to the side while bringing the right arm up towards the ceiling in a side plank.\nLower the arm back to the floor for another pushup and then twist to the other side.\nRepeat the series, alternating each side, for 10 or more reps.",
    "images": [
      "Push_Up_to_Side_Plank/0.jpg",
      "Push_Up_to_Side_Plank/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "abdominals",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Pushups",
    "name": "Pushups",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length.\nNext, lower yourself downward until your chest almost touches the floor as you inhale.\nNow breathe out and press your upper body back up to the starting position while squeezing your chest.\nAfter a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.",
    "images": [
      "Pushups/0.jpg",
      "Pushups/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Pushups_Close_and_Wide_Hand_Positions",
    "name": "Pushups (Close and Wide Hand Positions)",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie on the floor face down and body straight with your toes on the floor and the hands wider than shoulder width for a wide hand position and closer than shoulder width for a close hand position. Make sure you are holding your torso up at arms length.\nLower yourself until your chest almost touches the floor as you inhale.\nUsing your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step.\nAfter a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Pushups_Close_and_Wide_Hand_Positions/0.jpg",
      "Pushups_Close_and_Wide_Hand_Positions/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Rack_Pull_with_Bands",
    "name": "Rack Pull with Bands",
    "category": "powerlifting",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Set up in a power rack with the bar on the pins. The pins should be set to the desired point; just below the knees, just above, or in the mid thigh position. Attach bands to the base of the rack, or secure them with dumbbells. Attach the other end to the bar. You may need to choke the bands to provide tension.\nPosition yourself against the bar in proper deadlifting position. Your feet should be under your hips, your grip shoulder width, back arched, and hips back to engage the hamstrings. Since the weight is typically heavy, you may use a mixed grip, a hook grip, or use straps to aid in holding the weight.\nWith your head looking forward, extend through the hips and knees, pulling the weight up and back until lockout. Be sure to pull your shoulders back as you complete the movement. Return the weight to the pins and repeat.",
    "images": [
      "Rack_Pull_with_Bands/0.jpg",
      "Rack_Pull_with_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "forearms",
      "glutes",
      "hamstrings",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Rack_Pulls",
    "name": "Rack Pulls",
    "category": "powerlifting",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Set up in a power rack with the bar on the pins. The pins should be set to the desired point; just below the knees, just above, or in the mid thigh position. Position yourself against the bar in proper deadlifting position. Your feet should be under your hips, your grip shoulder width, back arched, and hips back to engage the hamstrings. Since the weight is typically heavy, you may use a mixed grip, a hook grip, or use straps to aid in holding the weight.\nWith your head looking forward, extend through the hips and knees, pulling the weight up and back until lockout. Be sure to pull your shoulders back as you complete the movement.\nReturn the weight to the pins and repeat.",
    "images": [
      "Rack_Pulls/0.jpg",
      "Rack_Pulls/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "forearms",
      "glutes",
      "hamstrings",
      "traps"
    ]
  },
  {
    "id": "Recumbent_Bike",
    "name": "Recumbent Bike",
    "category": "cardio",
    "force": null,
    "level": "beginner",
    "mechanic": null,
    "equipment": "machine",
    "instructions": "To begin, seat yourself on the bike and adjust the seat to your height.\nSelect the desired option from the menu. You may have to start pedaling to turn it on. You can use the manual setting, or you can select a program to use. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. The level of resistance can be changed throughout the workout. The handles can be used to monitor your heart rate to help you stay at an appropriate intensity.\nRecumbent bikes offer convenience, cardiovascular benefits, and have less impact than other activities. A 150 lb person will burn about 230 calories cycling at a moderate rate for 30 minutes, compared to 450 calories or more running.",
    "images": [
      "Recumbent_Bike/0.jpg",
      "Recumbent_Bike/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Reverse_Band_Bench_Press",
    "name": "Reverse Band Bench Press",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Position a bench inside a power rack, with the bar set to the correct height. Begin by anchoring bands either to band pegs or to the top of the rack. Ensure that you will be position properly under the bands. Attach the other end to the barbell.\nLie on the bench, tuck your feet underneath you and arch your back. Using the bar to help support your weight, lift your shoulder off the bench and retract them, squeezing the shoulder blades together. Use your feet to drive your traps into the bench. Maintain this tight body position throughout the movement. However wide your grip, it should cover the ring on the bar.\nPull the bar out of the rack without protracting your shoulders. Focus on squeezing the bar and trying to pull it apart. Lower the bar to your lower chest or upper stomach. The bar, wrist, and elbow should stay in line at all times.\nPause when the barbell touches your torso, and then drive the bar up with as much force as possible. The elbows should be tucked in until lockout.",
    "images": [
      "Reverse_Band_Bench_Press/0.jpg",
      "Reverse_Band_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "forearms",
      "lats",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Reverse_Band_Box_Squat",
    "name": "Reverse Band Box Squat",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin in a power rack with a box at the appropriate height behind you. Set up the bands either on band pegs or attached to the top of the rack, ensuring they will be directly above the bar during the squat. Attach the other end to the bar.\nBegin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wider for more emphasis on the back, glutes, adductors, and hamstrings, or closer together for more quad development. Keep your head facing forward.\nWith your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips until you are seated on the box. Ideally, your shins should be perpendicular to the ground. Pause when you reach the box, and relax the hip flexors. Never bounce off of a box.\nKeeping the weight on your heels and pushing your feet and knees out, drive upward off of the box as you lead the movement with your head. Continue upward, maintaining tightness head to toe. Use care to return the barbell to the rack.",
    "images": [
      "Reverse_Band_Box_Squat/0.jpg",
      "Reverse_Band_Box_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "abductors",
      "adductors",
      "calves",
      "forearms",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Reverse_Band_Deadlift",
    "name": "Reverse Band Deadlift",
    "category": "powerlifting",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Set the bar up in a power rack. Attach bands to the top of the rack, using either bands pegs or the frame itself. Attach the other end of the bands to the bar.\nApproach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets.\nWith your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward.\nAfter the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.\nLower the bar by bending at the hips and guiding it to the floor.",
    "images": [
      "Reverse_Band_Deadlift/0.jpg",
      "Reverse_Band_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "abductors",
      "adductors",
      "calves",
      "glutes",
      "hamstrings",
      "quadriceps"
    ]
  },
  {
    "id": "Reverse_Band_Power_Squat",
    "name": "Reverse Band Power Squat",
    "category": "powerlifting",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin in a power rack with the pins and bar set at the appropriate height. After loading the bar, attach bands to the top of the rack, using either pegs or the frame itself. Attach the other end of the bands to the bar.\nBegin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wide for more emphasis on the back, glutes, adductors, and hamstrings.\nKeep your head facing forward. With your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips as much as possible. Ideally, your shins should be perpendicular to the ground. Lower bar position necessitates a greater torso lean to keep the bar over the heels. Continue until you break parallel, which is defined as the crease of the hip being in line with the top of the knee.\nKeeping the weight on your heels and pushing your feet and knees out, drive upward as you lead the movement with your head. Continue upward, maintaining tightness head to toe, until you have returned to the starting position.",
    "images": [
      "Reverse_Band_Power_Squat/0.jpg",
      "Reverse_Band_Power_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "adductors",
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Reverse_Band_Sumo_Deadlift",
    "name": "Reverse Band Sumo Deadlift",
    "category": "powerlifting",
    "force": "pull",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin with a bar loaded on the floor inside of a power rack. Attach bands to the top of the rack, using either pegs or the frame itself. Attach the other end to the barbell.\nApproach the bar so that the bar intersects the middle of the feet. The feet should be set very wide, near the collars. Bend at the hips to grip the bar. The arms should be directly below the shoulders, inside the legs, and you can use a pronated grip, a mixed grip, or hook grip. Relax the shoulders, which in effect lengthens your arms.\nTake a breath, and then lower your hips, looking forward with your head with your chest up. Drive through the floor, spreading your feet apart, with your weight on the back half of your feet. Extend through the hips and knees.\nAs the bar passes through the knees, lean back and drive the hips into the bar, pulling your shoulder blades together.\nReturn the weight to the ground by bending at the hips and controlling the weight on the way down.",
    "images": [
      "Reverse_Band_Sumo_Deadlift/0.jpg",
      "Reverse_Band_Sumo_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "abductors",
      "adductors",
      "calves",
      "forearms",
      "glutes",
      "lower back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Reverse_Barbell_Curl",
    "name": "Reverse Barbell Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Stand up with your torso upright while holding a barbell at shoulder width with the elbows close to the torso. The palm of your hands should be facing down (pronated grip). This will be your starting position.\nWhile holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle.\nSlowly begin to bring the bar back to starting position as your breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Reverse_Barbell_Curl/0.jpg",
      "Reverse_Barbell_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Reverse_Barbell_Preacher_Curls",
    "name": "Reverse Barbell Preacher Curls",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "e-z curl bar",
    "instructions": "Grab an EZ-bar using a shoulder width and palms down (pronated) grip.\nNow place the upper part of both arms on top of the preacher bench and have your arms extended. This will be your starting position.\nAs you exhale, use the biceps to curl the weight up until your biceps are fully contracted and the barbell is at shoulder height. Squeeze the biceps hard for a second at the contracted position.\nAs you breathe in, slowly lower the barbell until your upper arms are extended and the biceps is fully stretched.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Reverse_Barbell_Preacher_Curls/0.jpg",
      "Reverse_Barbell_Preacher_Curls/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Reverse_Cable_Curl",
    "name": "Reverse Cable Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Stand up with your torso upright while holding a bar attachment that is attached to a low pulley using a pronated (palms down) and shoulder width grip. Make sure also that you keep the elbows close to the torso. This will be your starting position.\nWhile holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle.\nSlowly begin to bring the bar back to starting position as your breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Reverse_Cable_Curl/0.jpg",
      "Reverse_Cable_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Reverse_Crunch",
    "name": "Reverse Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Lie down on the floor with your legs fully extended and arms to the side of your torso with the palms on the floor. Your arms should be stationary for the entire exercise.\nMove your legs up so that your thighs are perpendicular to the floor and feet are together and parallel to the floor. This is the starting position.\nWhile inhaling, move your legs towards the torso as you roll your pelvis backwards and you raise your hips off the floor. At the end of this movement your knees will be touching your chest.\nHold the contraction for a second and move your legs back to the starting position while exhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Reverse_Crunch/0.jpg",
      "Reverse_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Reverse_Flyes",
    "name": "Reverse Flyes",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "To begin, lie down on an incline bench with the chest and stomach pressing against the incline. Have the dumbbells in each hand with the palms facing each other (neutral grip).\nExtend the arms in front of you so that they are perpendicular to the angle of the bench. The legs should be stationary while applying pressure with the ball of your toes. This is the starting position.\nMaintaining the slight bend of the elbows, move the weights out and away from each other (to the side) in an arc motion while exhaling. Tip: Try to squeeze your shoulder blades together to get the best results from this exercise.\nThe arms should be elevated until they are parallel to the floor.\nFeel the contraction and slowly lower the weights back down to the starting position while inhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Reverse_Flyes/0.jpg",
      "Reverse_Flyes/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Reverse_Flyes_With_External_Rotation",
    "name": "Reverse Flyes With External Rotation",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "To begin, lie down on an incline bench set at a 30-degree angle with the chest and stomach pressing against the incline.\nHave the dumbbells in each hand with the palms facing down to the floor. Your arms should be in front of you so that they are perpendicular to the angle of the bench. Tip: Your elbows should have a slight bend. The legs should be stationary while applying pressure with the ball of your toes (your heels should not be touching the floor). This is the starting position.\nMaintaining the slight bend of the elbows, move the weights out and away from each other in an arc motion while exhaling.\nAs you lift the weight, your wrist should externally rotate by 90-degrees so that you go from a palms down (pronated) grip to a palms facing each other (neutral) grip. Tip: Try to squeeze your shoulder blades together to get the best results from this exercise.\nThe arms should be elevated until they are level with the head.\nFeel the contraction and slowly lower the weights back down to the starting position while inhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Reverse_Flyes_With_External_Rotation/0.jpg",
      "Reverse_Flyes_With_External_Rotation/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Reverse_Grip_Bent-Over_Rows",
    "name": "Reverse Grip Bent-Over Rows",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Stand erect while holding a barbell with a supinated grip (palms facing up).\nBend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.\nWhile keeping the torso stationary, lift the barbell as you breathe out, keeping the elbows close to the body and not doing any force with the forearm other than holding the weights. On the top contracted position, squeeze the back muscles and hold for a second.\nSlowly lower the weight again to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Reverse_Grip_Bent-Over_Rows/0.jpg",
      "Reverse_Grip_Bent-Over_Rows/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "Reverse_Grip_Triceps_Pushdown",
    "name": "Reverse Grip Triceps Pushdown",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Start by setting a bar attachment (straight or e-z) on a high pulley machine.\nFacing the bar attachment, grab it with the palms facing up (supinated grip) at shoulder width. Lower the bar by using your lats until your arms are fully extended by your sides. Tip: Elbows should be in by your sides and your feet should be shoulder width apart from each other. This is the starting position.\nSlowly elevate the bar attachment up as you inhale so it is aligned with your chest. Only the forearms should move and the elbows/upper arms should be stationary by your side at all times.\nThen begin to lower the cable bar back down to the original staring position while exhaling and contracting the triceps hard.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Reverse_Grip_Triceps_Pushdown/0.jpg",
      "Reverse_Grip_Triceps_Pushdown/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Reverse_Hyperextension",
    "name": "Reverse Hyperextension",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": null,
    "equipment": "machine",
    "instructions": "Place your feet between the pads after loading an appropriate weight. Lay on the top pad, allowing your hips to hang off the back, while grasping the handles to hold your position.\nTo begin the movement, flex the hips, pulling the legs forward.\nReverse the motion by extending the hips, kicking the leg back. It is very important not to over-extend the hip on this movement, stopping short of your full range of motion.\nReturn by again flexing the hip, pulling the carriage forward as far as you can.\nRepeat for the desired number of repetitions.",
    "images": [
      "Reverse_Hyperextension/0.jpg",
      "Reverse_Hyperextension/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes"
    ]
  },
  {
    "id": "Reverse_Machine_Flyes",
    "name": "Reverse Machine Flyes",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Adjust the handles so that they are fully to the rear. Make an appropriate weight selection and adjust the seat height so the handles are at shoulder level. Grasp the handles with your hands facing inwards. This will be your starting position.\nIn a semicircular motion, pull your hands out to your side and back, contracting your rear delts.\nKeep your arms slightly bent throughout the movement, with all of the motion occurring at the shoulder joint.\nPause at the rear of the movement, and slowly return the weight to the starting position.",
    "images": [
      "Reverse_Machine_Flyes/0.jpg",
      "Reverse_Machine_Flyes/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Reverse_Plate_Curls",
    "name": "Reverse Plate Curls",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Start by standing straight with a weighted plate held by both hands and arms fully extended. Use a pronated grip (palms facing down) and make sure your fingers grab the rough side of the plate while your thumb grabs the smooth side. Note: For the best results, grab the weighted plate at an 11:00 and 1:00 o'clock position.\nYour feet should be shoulder width apart from each other and the weighted plate should be near the groin area. This is the starting position.\nSlowly lift the plate up while keeping the elbows in and the upper arms stationary until your biceps and forearms touch while exhaling. The plate should be evenly aligned with your torso at this point.\nFeel the contraction for a second and begin to lower the weight back down to the starting position while inhaling\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Reverse_Plate_Curls/0.jpg",
      "Reverse_Plate_Curls/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Reverse_Triceps_Bench_Press",
    "name": "Reverse Triceps Bench Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie back on a flat bench. Using a close, supinated grip (around shoulder width), lift the bar from the rack and hold it straight over you with your arms locked extended in front of you and perpendicular to the floor. This will be your starting position.\nAs you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that as opposed to a regular bench press, you keep the elbows close to the torso at all times in order to maximize triceps involvement.\nAfter a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the bar back in the rack.",
    "images": [
      "Reverse_Triceps_Bench_Press/0.jpg",
      "Reverse_Triceps_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Ring_Dips",
    "name": "Ring Dips",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Grip a ring in each hand, and then take a small jump to help you get into the starting position with your arms locked out.\nBegin by flexing the elbow, lowering your body until your arms break 90 degrees. Avoid swinging, and maintain good posture throughout the descent.\nReverse the motion by extending the elbow, pushing yourself back up into the starting position.\nRepeat for the desired number of repetitions.",
    "images": [
      "Ring_Dips/0.jpg",
      "Ring_Dips/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Rocking_Standing_Calf_Raise",
    "name": "Rocking Standing Calf Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place it on the back of your shoulders (slightly below the neck).\nHold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance. Also maintain a straight back and keep the knees with a slight bend; never locked. This will be your starting position.\nRaise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending (other than the slight initial bend we created during positioning) at any time. Hold the contracted position by a second before you start to go back down.\nGo back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched.\nNow lift your toes by contracting the tibia muscles in the front of the calves as you breathe out.\nHold for a second and bring them back down as you breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Rocking_Standing_Calf_Raise/0.jpg",
      "Rocking_Standing_Calf_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Rocky_Pull-Ups_Pulldowns",
    "name": "Rocky Pull-Ups/Pulldowns",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Grab the pull-up bar with the palms facing forward using a wide grip.\nAs you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.\nPull your torso up until the bar touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar.\nAfter a second on the contracted position, start to inhale and slowly lower your torso back to the starting position when your arms are fully extended and the lats are fully stretched.\nNow repeat the same movements as described above except this time your torso will remain straight as you go up and the bar will touch the back of the neck instead of the upper chest. Tip: Use the head to lean forward slightly as it will help you properly execute this portion of the exercise.\nOnce you have lowered yourself back down to the starting position, repeat the exercise for the prescribed amount of repetitions in your program.",
    "images": [
      "Rocky_Pull-Ups_Pulldowns/0.jpg",
      "Rocky_Pull-Ups_Pulldowns/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Romanian_Deadlift",
    "name": "Romanian Deadlift",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Put a barbell in front of you on the ground and grab it using a pronated (palms facing down) grip that a little wider than shoulder width. Tip: Depending on the weight used, you may need wrist wraps to perform the exercise and also a raised platform in order to allow for better range of motion.\nBend the knees slightly and keep the shins vertical, hips back and back straight. This will be your starting position.\nKeeping your back and arms completely straight at all times, use your hips to lift the bar as you exhale. Tip: The movement should not be fast but steady and under control.\nOnce you are standing completely straight up, lower the bar by pushing the hips back, only slightly bending the knees, unlike when squatting. Tip: Take a deep breath at the start of the movement and keep your chest up. Hold your breath as you lower and exhale as you complete the movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Romanian_Deadlift/0.jpg",
      "Romanian_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "lower back"
    ]
  },
  {
    "id": "Rope_Climb",
    "name": "Rope Climb",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Grab the rope with both hands above your head. Pull down on the rope as you take a small jump.\nWrap the rope around one leg, using your feet to pinch the rope. Reach up as high as possible with your arms, gripping the rope tightly.\nRelease the rope from your feet as you pull yourself up with your arms, bringing your knees towards your chest.\nResecure your feet on the rope, and then stand up to take another high hold on the rope. Continue until you reach the top of the rope.\nTo lower yourself, loosen the grip of your feet on the rope as you slide down using a hand over hand motion.",
    "images": [
      "Rope_Climb/0.jpg",
      "Rope_Climb/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "forearms",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Rope_Crunch",
    "name": "Rope Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Kneel 1-2 feet in front of a cable system with a rope attached.\nAfter selecting an appropriate weight, grasp the rope with both hands reaching overhead. Your torso should be upright in the starting position.\nTo begin, flex at the spine, attempting to bring your rib cage to your legs as you pull the cable down.\nPause at the bottom of the motion, and then slowly return to the starting position.\nThese can be done with twists or to the side to hit the obliques.",
    "images": [
      "Rope_Crunch/0.jpg",
      "Rope_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Rope_Jumping",
    "name": "Rope Jumping",
    "category": "cardio",
    "force": null,
    "level": "intermediate",
    "mechanic": null,
    "equipment": "other",
    "instructions": "Hold an end of the rope in each hand. Position the rope behind you on the ground. Raise your arms up and turn the rope over your head bringing it down in front of you. When it reaches the ground, jump over it. Find a good turning pace that can be maintained. Different speeds and techniques can be used to introduce variation.\nRope jumping is exciting, challenges your coordination, and requires a lot of energy. A 150 lb person will burn about 350 calories jumping rope for 30 minutes, compared to over 450 calories running.",
    "images": [
      "Rope_Jumping/0.jpg",
      "Rope_Jumping/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "hamstrings"
    ]
  },
  {
    "id": "Rope_Straight-Arm_Pulldown",
    "name": "Rope Straight-Arm Pulldown",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Attach a rope to a high pulley and make your weight selection. Stand a couple feet back from the pulley with your feet staggered and take the rope with both hands. Lean forward from the hip, keeping your back straight, with your arms extended up in front of you. This will be your starting position.\nKeeping your arms straight, extend the shoulder to pull the rope down to your thighs.\nPause at the bottom of the motion, squeezing your lats.\nReturn to the starting position without allowing the weight to fully rest on the stack.",
    "images": [
      "Rope_Straight-Arm_Pulldown/0.jpg",
      "Rope_Straight-Arm_Pulldown/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Rowing_Stationary",
    "name": "Rowing, Stationary",
    "category": "cardio",
    "force": null,
    "level": "intermediate",
    "mechanic": null,
    "equipment": "machine",
    "instructions": "To begin, seat yourself on the rower. Make sure that your heels are resting comfortably against the base of the foot pedals and that the straps are secured. Select the program that you wish to use, if applicable. Sit up straight and bend forward at the hips.\nThere are three phases of movement when using a rower. The first phase is when you come forward on the rower. Your knees are bent and against your chest. Your upper body is leaning slightly forward while still maintaining good posture. Next, push against the foot pedals and extend your legs while bringing your hands to your upper abdominal area, squeezing your shoulders back as you do so. To avoid straining your back, use primarily your leg and hip muscles.\nThe recovery phase simply involves straightening your arms, bending the knees, and bringing your body forward again as you transition back into the first phase.",
    "images": [
      "Rowing_Stationary/0.jpg",
      "Rowing_Stationary/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "biceps",
      "calves",
      "glutes",
      "hamstrings",
      "lower back",
      "middle back"
    ]
  },
  {
    "id": "Running_Treadmill",
    "name": "Running, Treadmill",
    "category": "cardio",
    "force": null,
    "level": "beginner",
    "mechanic": null,
    "equipment": "machine",
    "instructions": "To begin, step onto the treadmill and select the desired option from the menu. Most treadmills have a manual setting, or you can select a program to run. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. Elevation can be adjusted to change the intensity of the workout.\nTreadmills offer convenience, cardiovascular benefits, and usually have less impact than running outside. A 150 lb person will burn over 450 calories running 8 miles per hour for 30 minutes. Maintain proper posture as you run, and only hold onto the handles when necessary, such as when dismounting or checking your heart rate.",
    "images": [
      "Running_Treadmill/0.jpg",
      "Running_Treadmill/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Russian_Twist",
    "name": "Russian Twist",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Lie down on the floor placing your feet either under something that will not move or by having a partner hold them. Your legs should be bent at the knees.\nElevate your upper body so that it creates an imaginary V-shape with your thighs. Your arms should be fully extended in front of you perpendicular to your torso and with the hands clasped. This is the starting position.\nTwist your torso to the right side until your arms are parallel with the floor while breathing out.\nHold the contraction for a second and move back to the starting position while breathing out. Now move to the opposite side performing the same techniques you applied to the right side.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Russian_Twist/0.jpg",
      "Russian_Twist/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "lower back"
    ]
  },
  {
    "id": "Scapular_Pull-Up",
    "name": "Scapular Pull-Up",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": null,
    "instructions": "Take a pronated grip on a pull-up bar.\nFrom a hanging position, raise yourself a few inches without using your arms. Do this by depressing your shoulder girdle in a reverse shrugging motion.\nPause at the completion of the movement, and then slowly return to the starting position before performing more repetitions.",
    "images": [
      "Scapular_Pull-Up/0.jpg",
      "Scapular_Pull-Up/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": [
      "lats",
      "middle back"
    ]
  },
  {
    "id": "Seated_Band_Hamstring_Curl",
    "name": "Seated Band Hamstring Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Secure a band close to the ground and place a bench a couple feet away from it.\nSeat yourself on the bench and secure the band behind your ankles, beginning with your legs straight. This will be your starting position.\nFlex the knees, bringing your feet towards the bench. You may need to lean back slightly to keep your feet from striking the floor.\nPause at the completion of the movement, and then slowly return to the starting position.",
    "images": [
      "Seated_Band_Hamstring_Curl/0.jpg",
      "Seated_Band_Hamstring_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Barbell_Military_Press",
    "name": "Seated Barbell Military Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Sit on a Military Press Bench with a bar behind your head and either have a spotter give you the bar (better on the rotator cuff this way) or pick it up yourself carefully with a pronated grip (palms facing forward). Tip: Your grip should be wider than shoulder width and it should create a 90-degree angle between the forearm and the upper arm as the barbell goes down.\nOnce you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position.\nLower the bar down to the collarbone slowly as you inhale.\nLift the bar back up to the starting position as you exhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Barbell_Military_Press/0.jpg",
      "Seated_Barbell_Military_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Seated_Barbell_Twist",
    "name": "Seated Barbell Twist",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Start out by sitting at the end of a flat bench with a barbell placed on top of your thighs. Your feet should be shoulder width apart from each other.\nGrip the bar with your palms facing down and make sure your hands are wider than shoulder width apart from each other. Begin to lift the barbell up over your head until your arms are fully extended.\nNow lower the barbell behind your head until it is resting along the base of your neck. This is the starting position.\nWhile keeping your feet and head stationary, move your waist from side to side so that your oblique muscles feel the contraction. Only move from side to side as far as your waist will allow you to go. Stretching or moving too far can cause an injury to occur. Tip: Use a slow and controlled motion.\nRemember to breathe out while twisting your body to the side and in when moving back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Barbell_Twist/0.jpg",
      "Seated_Barbell_Twist/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Bent-Over_One-Arm_Dumbbell_Triceps_Extension",
    "name": "Seated Bent-Over One-Arm Dumbbell Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit down at the end of a flat bench with a dumbbell in one arm using a neutral grip (palms of the hand facing you).\nBend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Make sure that you keep the head up.\nThe upper arm with the dumbbell should be close to the torso and aligned with it (lifted up until it is parallel to the floor while the forearms are pointing towards the floor as the hands hold the weights). Tip: There should be a 90-degree angle between the forearms and the upper arm. This is your starting position.\nKeeping the upper arm stationary, use the triceps to lift the weight as you exhale until the forearm is parallel to the floor and the whole arm is extended. Like many other arm exercises, only the forearm moves.\nAfter a second contraction at the top, slowly lower the dumbbell back to the starting position as you inhale.\nRepeat the movement for the prescribed amount of repetitions.\nSwitch arms and repeat the exercise.",
    "images": [
      "Seated_Bent-Over_One-Arm_Dumbbell_Triceps_Extension/0.jpg",
      "Seated_Bent-Over_One-Arm_Dumbbell_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Bent-Over_Rear_Delt_Raise",
    "name": "Seated Bent-Over Rear Delt Raise",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Place a couple of dumbbells looking forward in front of a flat bench.\nSit on the end of the bench with your legs together and the dumbbells behind your calves.\nBend at the waist while keeping the back straight in order to pick up the dumbbells. The palms of your hands should be facing each other as you pick them. This will be your starting position.\nKeeping your torso forward and stationary, and the arms slightly bent at the elbows, lift the dumbbells straight to the side until both arms are parallel to the floor. Exhale as you lift the weights. (Note: avoid swinging the torso or bringing the arms back as opposed to the side.)\nAfter a one second contraction at the top, slowly lower the dumbbells back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Bent-Over_Rear_Delt_Raise/0.jpg",
      "Seated_Bent-Over_Rear_Delt_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Bent-Over_Two-Arm_Dumbbell_Triceps_Extension",
    "name": "Seated Bent-Over Two-Arm Dumbbell Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit down at the end of a flat bench with a dumbbell in both arms using a neutral grip (palms of the hand facing you).\nBend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Make sure that you keep the head up.\nThe upper arms with the dumbbells should be close to the torso and aligned with it (lifted up until they are parallel to the floor while the forearms are pointing towards the floor as the hands hold the weights). Tip: There should be a 90-degree angle between the forearms and the upper arm. This is your starting position.\nKeeping the upper arms stationary, use the triceps to lift the weight as you exhale until the forearms are parallel to the floor and the whole arm is extended. Like many other arm exercises, only the forearm moves.\nAfter a second contraction at the top, slowly lower the dumbbells back to the starting position as you inhale.\nRepeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Seated_Bent-Over_Two-Arm_Dumbbell_Triceps_Extension/0.jpg",
      "Seated_Bent-Over_Two-Arm_Dumbbell_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Cable_Rows",
    "name": "Seated Cable Rows",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "For this exercise you will need access to a low pulley row machine with a V-bar. Note: The V-bar will enable you to have a neutral grip where the palms of your hands face each other. To get into the starting position, first sit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked.\nLean over as you keep the natural alignment of your back and grab the V-bar handles.\nWith your arms extended pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lats as you hold the bar in front of you. This is the starting position of the exercise.\nKeeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals. Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Cable_Rows/0.jpg",
      "Seated_Cable_Rows/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "Seated_Cable_Shoulder_Press",
    "name": "Seated Cable Shoulder Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Adjust the weight to an appropriate amount and be seated, grasping the handles. Your upper arms should be about 90 degrees to the body, with your head and chest up. The elbows should also be bent to about 90 degrees. This will be your starting position.\nBegin by extending through the elbow, pressing the handles together above your head.\nAfter pausing at the top, return the handles to the starting position. Ensure that you maintain tension on the cables.\nYou can also execute this movement with your back off the pad and alternate hands.",
    "images": [
      "Seated_Cable_Shoulder_Press/0.jpg",
      "Seated_Cable_Shoulder_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Seated_Calf_Raise",
    "name": "Seated Calf Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Sit on the machine and place your toes on the lower portion of the platform provided with the heels extending off. Choose the toe positioning of your choice (forward, in, or out) as per the beginning of this chapter.\nPlace your lower thighs under the lever pad, which will need to be adjusted according to the height of your thighs. Now place your hands on top of the lever pad in order to prevent it from slipping forward.\nLift the lever slightly by pushing your heels up and release the safety bar. This will be your starting position.\nSlowly lower your heels by bending at the ankles until the calves are fully stretched. Inhale as you perform this movement.\nRaise the heels by extending the ankles as high as possible as you contract the calves and breathe out. Hold the top contraction for a second.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Calf_Raise/0.jpg",
      "Seated_Calf_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Close-Grip_Concentration_Barbell_Curl",
    "name": "Seated Close-Grip Concentration Barbell Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Sit down on a flat bench with a barbell or E-Z Bar in front of you in between your legs. Your legs should be spread with the knees bent and the feet on the floor.\nUse your arms to pick the barbell up and place the back of your upper arms on top of your inner thighs (around three and a half inches away from the front of the knee). A supinated grip closer than shoulder width is needed to perform this exercise. Tip: Your arm should be extended at arms length and the barbell should be above the floor. This will be your starting position.\nWhile holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps.\nSlowly begin to bring the barbell back to starting position as your breathe in. Tip: Avoid swinging motions at any time.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Close-Grip_Concentration_Barbell_Curl/0.jpg",
      "Seated_Close-Grip_Concentration_Barbell_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Dumbbell_Curl",
    "name": "Seated Dumbbell Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit on a flat bench with a dumbbell on each hand being held at arms length. The elbows should be close to the torso.\nRotate the palms of the hands so that they are facing your torso. This will be your starting position.\nWhile holding the upper arm stationary, curl the weights and start twisting the wrists once the dumbbells pass your thighs so that the palms of your hands face forward at the end of the movement. Make sure that you contract the biceps as you breathe out and make sure that only the forearms move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps.\nSlowly begin to bring the dumbbells back to the starting position as your breathe in and as you rotate the wrists back to a neutral grip.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Dumbbell_Curl/0.jpg",
      "Seated_Dumbbell_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Dumbbell_Inner_Biceps_Curl",
    "name": "Seated Dumbbell Inner Biceps Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit on the end of a flat bench with a dumbbell in each hand being held at arms length. The elbows should be close to the torso.\nRotate the palms of the hands so that they are facing inward in a neutral position. This will be your starting position.\nWhile holding the upper arms stationary, curl the dumbbells out and up, turning the palms out as you lift and keeping your forearms in line with your outer deltoids. Tips:\nOnly the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps.\nSlowly begin to bring the dumbbells back to the starting position as your breathe in. Remember to rotate your arms as you lower the dumbbells so that you can switch back to a neutral grip.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Dumbbell_Inner_Biceps_Curl/0.jpg",
      "Seated_Dumbbell_Inner_Biceps_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Dumbbell_Palms-Down_Wrist_Curl",
    "name": "Seated Dumbbell Palms-Down Wrist Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Start out by placing two dumbbells on the floor in front of a flat bench.\nSit down on the edge of the flat bench with your legs at about shoulder width apart. Make sure to keep your feet on the floor.\nUse your arms to grab both of the dumbbells and bring them up so that your forearms are resting against your thighs with the palms of the hands facing down. Your wrists should be hanging over the edge of your thighs.\nStart out by curling your wrist upwards and exhaling.\nSlowly lower your wrists back down to the starting position while inhaling. Make sure to inhale during this part of the exercise. Tip: Your forearms should be stationary as your wrist is the only movement needed to perform this exercise.\nRepeat for the recommended amount of repetitions.\nWhen finished, simply lower the dumbbells to the floor.",
    "images": [
      "Seated_Dumbbell_Palms-Down_Wrist_Curl/0.jpg",
      "Seated_Dumbbell_Palms-Down_Wrist_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Dumbbell_Palms-Up_Wrist_Curl",
    "name": "Seated Dumbbell Palms-Up Wrist Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Start out by placing two dumbbells on the floor in front of a flat bench.\nSit down on the edge of the flat bench with your legs at about shoulder width apart. Make sure to keep your feet on the floor.\nUse your arms to grab both of the dumbbells and bring them up so that your forearms are resting against your thighs with the palms of the hands facing up. Your wrists should be hanging over the edge of your thighs.\nStart out by curling your wrist upwards and exhaling.\nSlowly lower your wrists back down to the starting position while inhaling. Make sure to inhale during this part of the exercise. Tip: Your forearms should be stationary as your wrist is the only movement needed to perform this exercise.\nRepeat for the recommended amount of repetitions.\nWhen finished, simply lower the dumbbells to the floor.",
    "images": [
      "Seated_Dumbbell_Palms-Up_Wrist_Curl/0.jpg",
      "Seated_Dumbbell_Palms-Up_Wrist_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Dumbbell_Press",
    "name": "Seated Dumbbell Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Grab a couple of dumbbells and sit on a military press bench or a utility bench that has a back support on it as you place the dumbbells upright on top of your thighs.\nClean the dumbbells up one at a time by using your thighs to bring the dumbbells up to shoulder height at each side.\nRotate the wrists so that the palms of your hands are facing forward. This is your starting position.\nAs you exhale, push the dumbbells up until they touch at the top.\nAfter a second pause, slowly come down back to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Dumbbell_Press/0.jpg",
      "Seated_Dumbbell_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Seated_Flat_Bench_Leg_Pull-In",
    "name": "Seated Flat Bench Leg Pull-In",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Sit on a bench with the legs stretched out in front of you slightly below parallel and your arms holding on to the sides of the bench. Your torso should be leaning backwards around a 45-degree angle from the bench. This will be your starting position.\nBring the knees in toward you as you move your torso closer to them at the same time. Breathe out as you perform this movement.\nAfter a second pause, go back to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Flat_Bench_Leg_Pull-In/0.jpg",
      "Seated_Flat_Bench_Leg_Pull-In/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Good_Mornings",
    "name": "Seated Good Mornings",
    "category": "powerlifting",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Set up a box in a power rack. The pins should be set at an appropriate height. Begin by stepping under the bar and placing it across the back of the shoulders, not on top of your traps. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders.\nRemove the bar from the rack, creating a tight arch in your lower back. Keep your head facing forward. With your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips until you are seated on the box. This will be your starting position.\nKeeping the bar tight, bend forward at the hips as much as possible. If you set the pins to what would be parallel, you not only have a safety if you fail, but know when to stop.\nPause just above the pins and reverse the motion until your torso it upright.",
    "images": [
      "Seated_Good_Mornings/0.jpg",
      "Seated_Good_Mornings/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "glutes"
    ]
  },
  {
    "id": "Seated_Head_Harness_Neck_Resistance",
    "name": "Seated Head Harness Neck Resistance",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Place a neck strap on the floor at the end of a flat bench. Once you have selected the weights, sit at the end of the flat bench with your feet wider than shoulder width apart from each other. Your toes should be pointed out.\nSlowly move your torso forward until it is almost parallel with the floor. Using both hands, securely position the neck strap around your head. Tip: Make sure the weights are still lying on the floor to prevent any strain on the neck. Now grab the weight with both hands while elevating your torso back until it is almost perpendicular to the floor. Note: Your head and torso needs to be slightly tilted forward to perform this exercise.\nNow place both hands on top of your knees. This is the starting position.\nSlowly lower your neck down until your chin touches the upper part of your chest while breathing in.\nWhile exhaling, bring your neck back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Head_Harness_Neck_Resistance/0.jpg",
      "Seated_Head_Harness_Neck_Resistance/1.jpg"
    ],
    "primaryMuscles": [
      "neck"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Leg_Curl",
    "name": "Seated Leg Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Adjust the machine lever to fit your height and sit on the machine with your back against the back support pad.\nPlace the back of lower leg on top of padded lever (just a few inches under the calves) and secure the lap pad against your thighs, just above the knees. Then grasp the side handles on the machine as you point your toes straight (or you can also use any of the other two stances) and ensure that the legs are fully straight right in front of you. This will be your starting position.\nAs you exhale, pull the machine lever as far as possible to the back of your thighs by flexing at the knees. Keep your torso stationary at all times. Hold the contracted position for a second.\nSlowly return to the starting position as you breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Leg_Curl/0.jpg",
      "Seated_Leg_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Leg_Tucks",
    "name": "Seated Leg Tucks",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Sit on a bench with the legs stretched out in front of you slightly below parallel and your arms holding on to the sides of the bench. Your torso should be leaning backwards around a 45-degree angle from the bench. This will be your starting position.\nBring the knees in toward you as you move your torso closer to them at the same time. Breathe out as you perform this movement.\nAfter a second pause, go back to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Leg_Tucks/0.jpg",
      "Seated_Leg_Tucks/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_One-Arm_Dumbbell_Palms-Down_Wrist_Curl",
    "name": "Seated One-Arm Dumbbell Palms-Down Wrist Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit on a flat bench with a dumbbell in your right hand.\nPlace your feet flat on the floor, at a distance that is slightly wider than shoulder width apart.\nLean forward and place your right forearm on top of your upper right thigh with your palm down. Tip: Make sure that the back of the wrist lies on top of your knees. This will be your starting position.\nLower the dumbbell as far as possible as you keep a tight grip on the dumbbell. Inhale as you perform this movement.\nNow curl the dumbbell as high as possible as you contract the forearms and as you exhale. Keep the contraction for a second before you lower again. Tip: The only movement should happen at the wrist.\nPerform for the recommended amount of repetitions, switch arms and repeat the movement.",
    "images": [
      "Seated_One-Arm_Dumbbell_Palms-Down_Wrist_Curl/0.jpg",
      "Seated_One-Arm_Dumbbell_Palms-Down_Wrist_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_One-Arm_Dumbbell_Palms-Up_Wrist_Curl",
    "name": "Seated One-Arm Dumbbell Palms-Up Wrist Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit on a flat bench with a dumbbell in your right hand.\nPlace your feet flat on the floor, at a distance that is slightly wider than shoulder width apart.\nLean forward and place your right forearm on top of your upper right thigh with your palm up. Tip: Make sure that the front of the wrist lies on top of your knees. This will be your starting position.\nLower the dumbbell as far as possible as you keep a tight grip on the dumbbell. Inhale as you perform this movement.\nNow curl the dumbbell as high as possible as you contract the forearms and as you exhale. Keep the contraction for a second before you lower again. Tip: The only movement should happen at the wrist.\nPerform for the recommended amount of repetitions, switch arms and repeat the movement.",
    "images": [
      "Seated_One-Arm_Dumbbell_Palms-Up_Wrist_Curl/0.jpg",
      "Seated_One-Arm_Dumbbell_Palms-Up_Wrist_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_One-arm_Cable_Pulley_Rows",
    "name": "Seated One-arm Cable Pulley Rows",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "To get into the starting position, first sit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked.\nLean over as you keep the natural alignment of your back and grab the single handle attachment with your left arm using a palms-down grip.\nWith your arm extended pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lat as you hold the bar in front of you. The right arm can be kept by the waist. This is the starting position of the exercise.\nKeeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it as you rotate the wrist, so that by the time your hand is by your abdominals it is in a neutral position (palms facing the torso). Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard.\nHold that contraction for a second and slowly go back to the original position while breathing in. Tip: Remember to rotate the wrist as you go back to the starting position so that the palms are facing down again.\nRepeat for the recommended amount of repetitions and then perform the same movement with the right hand.",
    "images": [
      "Seated_One-arm_Cable_Pulley_Rows/0.jpg",
      "Seated_One-arm_Cable_Pulley_Rows/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats",
      "traps"
    ]
  },
  {
    "id": "Seated_Palm-Up_Barbell_Wrist_Curl",
    "name": "Seated Palm-Up Barbell Wrist Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Hold a barbell with both hands and your palms facing up; hands spaced about shoulder width.\nPlace your feet flat on the floor, at a distance that is slightly wider than shoulder width apart.\nLean forward and place your forearms on top of your upper thighs with your palms up. Tip: Make sure that the front of the wrists lay on top of your knees. This will be your starting position.\nLower the bar as far as possible while inhaling and keeping a tight grip.\nNow curl bar up as high as possible while flexing the forearms and exhaling. Hold the contraction at the top for a second and Tip: Only the wrist should move.",
    "images": [
      "Seated_Palm-Up_Barbell_Wrist_Curl/0.jpg",
      "Seated_Palm-Up_Barbell_Wrist_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Palms-Down_Barbell_Wrist_Curl",
    "name": "Seated Palms-Down Barbell Wrist Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Hold a barbell with both hands and your palms facing down; hands spaced about shoulder width.\nPlace your feet flat on the floor, at a distance that is slightly wider than shoulder width apart.\nLean forward and place your forearms on top of your upper thighs with your palms down. Tip: Make sure that the back of the wrists lay on top of your knees. This will be your starting position.\nLower the bar as far as possible while inhaling and keeping a tight grip.\nNow curl bar up as high as possible while flexing the forearms and exhaling. Hold the contraction at the top for a second and Tip: Only the wrist should move.",
    "images": [
      "Seated_Palms-Down_Barbell_Wrist_Curl/0.jpg",
      "Seated_Palms-Down_Barbell_Wrist_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Side_Lateral_Raise",
    "name": "Seated Side Lateral Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Pick a couple of dumbbells and sit at the end of a flat bench with your feet firmly on the floor. Hold the dumbbells with your palms facing in and your arms straight down at your sides at arms' length. This will be your starting position.\nWhile maintaining the torso stationary (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top.\nLower the dumbbells back down slowly to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Side_Lateral_Raise/0.jpg",
      "Seated_Side_Lateral_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Triceps_Press",
    "name": "Seated Triceps Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Sit down on a bench with back support and grasp a dumbbell with both hands and hold it overhead at arm's length. Tip: a better way is to have somebody hand it to you especially if it is very heavy. The resistance should be resting in the palms of your hands with your thumbs around it. The palm of the hand should be facing inward. This will be your starting position.\nKeeping your upper arms close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semi-circular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step.\nGo back to the starting position by using the triceps to raise the dumbbell. Breathe out as you perform this step.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Triceps_Press/0.jpg",
      "Seated_Triceps_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Seated_Two-Arm_Palms-Up_Low-Pulley_Wrist_Curl",
    "name": "Seated Two-Arm Palms-Up Low-Pulley Wrist Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Put a bench in front of a low pulley machine that has a barbell or EZ Curl attachment on it.\nMove the bench far enough away so that when you bring the handle to the top of your thighs tension is created on the cable due to the weight stack being moved up.\nNow hold the handle with both hands, palms up, using a shoulder-width grip.\nStep back and sit on the bench with your feet about shoulder width apart, firmly on the floor.\nLean forward and place the forearms on your thighs with the back of your wrists over your knees. This will be your starting position.\nLower the bar as far as possible, while inhaling and keeping a tight grip.\nNow curl the bar up as high as possible while contracting the forearms. Tip: Only the wrist should move; not the forearms.\nAfter a second contraction at the top go back to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Seated_Two-Arm_Palms-Up_Low-Pulley_Wrist_Curl/0.jpg",
      "Seated_Two-Arm_Palms-Up_Low-Pulley_Wrist_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "See-Saw_Press_Alternating_Side_Press",
    "name": "See-Saw Press (Alternating Side Press)",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Grab a dumbbell with each hand and stand up erect.\nClean (lift) the dumbbells to the chest/shoulder level and then rotate your wrists so that your palms are facing towards you as if you were getting ready to perform an Arnold Press. This will be your starting position.\nNow start extending your left arm overhead as you rotate the wrist so that the palm of your hand faces forward as you go up. Your elbows should come out also as you lift the weight. Simultaneously, you will also be bending from your hip to your opposite side. Tip: If you perform the exercise correctly, is should look as if you are trying to reach for something overhead on the right hand side of your body, but with your left arm. Breathe out as you perform this movement.\nOnce you reach the top position breathe in. Then, with the weight fully extended overhead and you bent over to your right hand side, begin the movement to the left side.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "See-Saw_Press_Alternating_Side_Press/0.jpg",
      "See-Saw_Press_Alternating_Side_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "abdominals",
      "triceps"
    ]
  },
  {
    "id": "Shotgun_Row",
    "name": "Shotgun Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Attach a single handle to a low cable.\nAfter selecting the correct weight, stand a couple feet back with a wide-split stance. Your arm should be extended and your shoulder forward. This will be your starting position.\nPerform the movement by retracting the shoulder and flexing the elbow. As you pull, supinate the wrist, turning the palm upward as you go.\nAfter a brief pause, return to the starting position.",
    "images": [
      "Shotgun_Row/0.jpg",
      "Shotgun_Row/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back"
    ]
  },
  {
    "id": "Shoulder_Press_-_With_Bands",
    "name": "Shoulder Press - With Bands",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "To begin, stand on an exercise band so that tension begins at arm's length. Grasp the handles and lift them so that the hands are at shoulder height at each side.\nRotate the wrists so that the palms of your hands are facing forward. Your elbows should be bent, with the upper arms and forearms in line to the torso. This is your starting position.\nAs you exhale, lift the handles up until your arms are fully extended overhead.",
    "images": [
      "Shoulder_Press_-_With_Bands/0.jpg",
      "Shoulder_Press_-_With_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Side_Bridge",
    "name": "Side Bridge",
    "category": "strength",
    "force": "static",
    "level": "beginner",
    "mechanic": null,
    "equipment": "body only",
    "instructions": "",
    "images": [
      "Side_Bridge/0.jpg",
      "Side_Bridge/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Side_Jackknife",
    "name": "Side Jackknife",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "",
    "images": [
      "Side_Jackknife/0.jpg",
      "Side_Jackknife/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Side_Lateral_Raise",
    "name": "Side Lateral Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Pick a couple of dumbbells and stand with a straight torso and the dumbbells by your side at arms length with the palms of the hand facing you. This will be your starting position.\nWhile maintaining the torso in a stationary position (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top.\nLower the dumbbells back down slowly to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Side_Lateral_Raise/0.jpg",
      "Side_Lateral_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Side_Laterals_to_Front_Raise",
    "name": "Side Laterals to Front Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "In a standing position, hold a pair of dumbbells at your side. This will be your starting position.\nKeeping your elbows slightly bent, raise the weights directly in front of you to shoulder height, avoiding any swinging or cheating.\nAt the top of the exercise move the weights out in front of you, keeping your arms extended.\nLower the weights with a controlled motion.\nOn the next repetition, raise the weights in front of you to shoulder height before moving the weights laterally to your sides.\nLower the weights to the starting position.",
    "images": [
      "Side_Laterals_to_Front_Raise/0.jpg",
      "Side_Laterals_to_Front_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "traps"
    ]
  },
  {
    "id": "Side_To_Side_Chins",
    "name": "Side To Side Chins",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Grab the pull-up bar with the palms facing forward using a wide grip.\nAs you have both arms extended in front of you holding the bar at a wide grip, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.\nPull your torso up while leaning to the left hand side until the bar almost touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space (no swinging) and only the arms should move. The forearms should do no other work other than hold the bar.\nAfter a second of contraction, inhale as you go back to the starting position.\nNow, pull your torso up while leaning to the right hand side until the bar almost touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar.\nAfter a second of contraction, inhale as you go back to the starting position.\nRepeat steps 3-6 until you have performed the prescribed amount of repetitions for each side.",
    "images": [
      "Side_To_Side_Chins/0.jpg",
      "Side_To_Side_Chins/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "forearms",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Single-Arm_Cable_Crossover",
    "name": "Single-Arm Cable Crossover",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Begin by moving the pulleys to the high position, select the resistance to be used, and take a handle in each hand.\nStep forward in front of both pulleys with your arms extended in front of you, bringing your hands together. Your head and chest should be up as you lean forward, while your feet should be staggered. This will be your starting position.\nKeeping your left arm in place, allow your right arm to extend out to the side, maintaining a slight bend at the elbow. The right arm should be perpendicular to the body at approximately shoulder level.\nReturn your arm back to the starting position by pulling your hand back to the midline of the body.\nHold for a second at the starting position and repeat the movement on the opposite side. Continue alternating back and forth for the prescribed number of repetitions.",
    "images": [
      "Single-Arm_Cable_Crossover/0.jpg",
      "Single-Arm_Cable_Crossover/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Single-Arm_Linear_Jammer",
    "name": "Single-Arm Linear Jammer",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight.\nRaise the bar from the floor, taking it to your shoulders with one or both hands. Adopt a wide stance. This will be your starting position.\nPerform the movement by extending the elbow, pressing the weight up. Move explosively, extending the hips and knees fully to produce maximal force.\nReturn to the starting position.",
    "images": [
      "Single-Arm_Linear_Jammer/0.jpg",
      "Single-Arm_Linear_Jammer/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "chest",
      "triceps"
    ]
  },
  {
    "id": "Single-Arm_Push-Up",
    "name": "Single-Arm Push-Up",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Begin laying prone on the ground. Move yourself into a position supporting your weight on your toes and one arm. Your working arm should be placed directly under the shoulder, fully extended. Your legs should be extended, and for this movement you may need a wider base, placing your feet further apart than in a normal push-up.\nMaintain good posture, and place your free hand behind your back. This will be your starting position.\nLower yourself by allowing the elbow to flex until you touch the ground.\nDescend slowly, and reverse direction be extending the arm to return to the starting position.",
    "images": [
      "Single-Arm_Push-Up/0.jpg",
      "Single-Arm_Push-Up/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Single-Leg_High_Box_Squat",
    "name": "Single-Leg High Box Squat",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Position a box in a rack. Secure a band or rope in place above the box.\nStanding in front of it, step onto the box to a full standing position, letting your other leg remain unsupported. Hold onto the band for balance\n. Continue stepping up and down on the same leg before switching to the opposite side.",
    "images": [
      "Single-Leg_High_Box_Squat/0.jpg",
      "Single-Leg_High_Box_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Single-Leg_Leg_Extension",
    "name": "Single-Leg Leg Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Seat yourself in the machine and adjust it so that you are positioned properly. The pad should be against the lower part of the shin but not in contact with the ankle. Adjust the seat so that the pivot point is in line with your knee. Select a weight appropriate for your abilities.\nMaintaining good posture, fully extend one leg, pausing at the top of the motion.\nReturn to the starting position without letting the weight stop, keeping tension on the muscle.\nRepeat for the desired number of repetitions.",
    "images": [
      "Single-Leg_Leg_Extension/0.jpg",
      "Single-Leg_Leg_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Single_Dumbbell_Raise",
    "name": "Single Dumbbell Raise",
    "category": "strength",
    "force": null,
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "With a wide stance, hold a dumbell with both hands, grasping the head of the dumbbell instead of the handle. Your arms should be extended and hanging at the waist. This will be your starting position.\nRaise the weight until it is above shoulder level, keeping your arms extended. Your torso and hips should remain stationary throughout the movement.\nReturn to the starting position and repeat for the recommended amount of repetitions.",
    "images": [
      "Single_Dumbbell_Raise/0.jpg",
      "Single_Dumbbell_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "forearms",
      "traps"
    ]
  },
  {
    "id": "Single_Leg_Glute_Bridge",
    "name": "Single Leg Glute Bridge",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Lay on the floor with your feet flat and knees bent.\nRaise one leg off of the ground, pulling the knee to your chest. This will be your starting position.\nExecute the movement by driving through the heel, extending your hip upward and raising your glutes off of the ground.\nExtend as far as possible, pause and then return to the starting position.",
    "images": [
      "Single_Leg_Glute_Bridge/0.jpg",
      "Single_Leg_Glute_Bridge/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings"
    ]
  },
  {
    "id": "Sit-Up",
    "name": "Sit-Up",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "Lie down on the floor placing your feet either under something that will not move or by having a partner hold them. Your legs should be bent at the knees.\nPlace your hands behind your head and lock them together by clasping your fingers. This is the starting position.\nElevate your upper body so that it creates an imaginary V-shape with your thighs. Breathe out when performing this part of the exercise.\nOnce you feel the contraction for a second, lower your upper body back down to the starting position while inhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Sit-Up/0.jpg",
      "Sit-Up/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Skating",
    "name": "Skating",
    "category": "cardio",
    "force": null,
    "level": "intermediate",
    "mechanic": null,
    "equipment": "other",
    "instructions": "Roller skating is a fun activity which can be effective in improving cardiorespiratory fitness and muscular endurance. It requires relatively good balance and coordination. It is necessary to learn the basics of skating including turning and stopping and to wear protective gear to avoid possible injury.\nYou can skate at a comfortable pace for 30 minutes straight. If you want a cardio challenge, do interval skating — speed skate two minutes of every five minutes, using the remaining three minutes to recover. A 150 lb person will typically burn about 175 calories in 30 minutes skating at a comfortable pace, similar to brisk walking.",
    "images": [
      "Skating/0.jpg",
      "Skating/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "abductors",
      "adductors",
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Sled_Overhead_Backward_Walk",
    "name": "Sled Overhead Backward Walk",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Attach dual handles to a sled connected by a rope or chain. Load the sled to a light weight.\nFace the sled, backing up until there is some tension in the line. Hold your hands directly above your head with your elbows extended. This will be your starting position.\nWalk backwards, keeping your arms raised above your head. Avoid jerky movements.",
    "images": [
      "Sled_Overhead_Backward_Walk/0.jpg",
      "Sled_Overhead_Backward_Walk/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "calves",
      "middle back",
      "quadriceps"
    ]
  },
  {
    "id": "Sled_Overhead_Triceps_Extension",
    "name": "Sled Overhead Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Attach dual handles to a sled using a chain or rope. Load the sled to an appropriate load.\nFacing away from the sled, step away until there is tension in the line. Raise your hands above your head, keeping them together, palms facing each other. Your elbows should be pointed upward with the elbows flexed. This will be your starting position.\nExtend through the elbow to straighten the arm. Ensure that your upper arm stays in position to isolate the triceps.\nUpon full extension, step forward to take the slack out of the line. You may keep your feet staggered for more stability.",
    "images": [
      "Sled_Overhead_Triceps_Extension/0.jpg",
      "Sled_Overhead_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Sled_Reverse_Flye",
    "name": "Sled Reverse Flye",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Attach dual handles to a sled connected by a rope or chain. Load the sled to a light weight.\nFace the sled, backing up until there is some tension in the line. Take both handles at arms length at about waist level. Bend the knees slightly and keep your chest and head up. This will be your starting position.\nWithout flexing the elbow, pull the handles upward and apart, performing a reverse fly with some external rotation. Your palms should be facing forward as you do this.\nReturn to the starting position, taking a couple steps back to take the slack out of the line.",
    "images": [
      "Sled_Reverse_Flye/0.jpg",
      "Sled_Reverse_Flye/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Sled_Row",
    "name": "Sled Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Attach dual handles to a sled connected by a rope or chain. Load the sled to an appropriate weight. Face the sled, backing up until there is some tension in the line.\nWith a handle in each hand, bend the knees slightly, keep your head and chest up, and begin with your arms extended.\nTo initiate the movement, flex the elbow as you retract your shoulder blades, pulling the sled towards you.\nTake a step or two back to get tension in the line and repeat.",
    "images": [
      "Sled_Row/0.jpg",
      "Sled_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Smith_Incline_Shoulder_Raise",
    "name": "Smith Incline Shoulder Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Place an incline bench underneath the smith machine. Place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Once the weight you need is selected, lie down on the incline bench and make sure your shoulders are aligned right under the barbell.\nUsing a shoulder width pronated (palms forward) grip, lift the bar from the rack and hold it straight over you with a slight bend at the elbows. This will be your starting position.\nAs you breathe out, lift the bar up until your arms are fully extended. Note: The contraction should be felt around the shoulders.\nAfter a second pause, bring the bar back down to the starting position as you breathe in.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the bar back in the rack.",
    "images": [
      "Smith_Incline_Shoulder_Raise/0.jpg",
      "Smith_Incline_Shoulder_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "chest"
    ]
  },
  {
    "id": "Smith_Machine_Behind_the_Back_Shrug",
    "name": "Smith Machine Behind the Back Shrug",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "With the bar at thigh level, load an appropriate weight.\nStand with the bar behind you, taking a shoulder-width, pronated grip on the bar and unhook the weight. You should be standing up straight with your head and chest up and your arms extended. This will be your starting position.\nInitiate the movement by shrugging your shoulders straight up. Do not flex the arms or wrist during the movement.\nAfter a brief pause return the weight to the starting position.\nRepeat for the desired number of repetitions before engaging the hooks to rack the weight.",
    "images": [
      "Smith_Machine_Behind_the_Back_Shrug/0.jpg",
      "Smith_Machine_Behind_the_Back_Shrug/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Smith_Machine_Bench_Press",
    "name": "Smith Machine Bench Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Place a flat bench underneath the smith machine. Now place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Once the weight you need is selected, lie down on the flat bench. Using a pronated grip that is wider than shoulder width, unlock the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.\nAs you breathe in, come down slowly until you feel the bar on your middle chest.\nAfter a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, lock the bar back in the rack.",
    "images": [
      "Smith_Machine_Bench_Press/0.jpg",
      "Smith_Machine_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Smith_Machine_Bent_Over_Row",
    "name": "Smith Machine Bent Over Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Set the barbell attached to the smith machine to a height that is about 2 inches below your knees.\nBend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up.\nNow grasp the barbell using an overhand (pronated) grip and unlock it from the smith machine rack. Then let it hang directly in front of you as your arms hang extended perpendicular to the floor and your torso. This is your starting position.\nWhile keeping the torso stationary, lift the barbell as you breathe out, keeping the elbows close to the body and not doing any force with the forearm other than holding the weights. On the top contracted position, squeeze the back muscles and hold for a second.\nSlowly lower the weight again to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Smith_Machine_Bent_Over_Row/0.jpg",
      "Smith_Machine_Bent_Over_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats",
      "shoulders"
    ]
  },
  {
    "id": "Smith_Machine_Calf_Raise",
    "name": "Smith Machine Calf Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Place a block or weight plate below the bar on the Smith machine. Set the bar to a position that best matches your height. Once the correct height is chosen and the bar is loaded, step onto the plates with the balls of your feet and place the bar on the back of your shoulders.\nTake the bar with both hands facing forward. Rotate the bar to unrack it. This will be your starting position.\nRaise your heels as high as possible by pushing off of the balls of your feet, flexing your calf at the top of the contraction. Your knees should remain extended. Hold the contracted position for a second before you start to go back down.\nReturn slowly to the starting position as you breathe in while lowering your heels.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Smith_Machine_Calf_Raise/0.jpg",
      "Smith_Machine_Calf_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Smith_Machine_Close-Grip_Bench_Press",
    "name": "Smith Machine Close-Grip Bench Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Place a flat bench underneath the smith machine. Place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Once the weight you need is selected, lie down on the flat bench. Using a close and pronated grip (palms facing forward) that is around shoulder width, unlock the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.\nAs you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that as opposed to a regular bench press, you keep the elbows close to the torso at all times in order to maximize triceps involvement.\nAfter a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, lock the bar back in the rack.",
    "images": [
      "Smith_Machine_Close-Grip_Bench_Press/0.jpg",
      "Smith_Machine_Close-Grip_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Smith_Machine_Decline_Press",
    "name": "Smith Machine Decline Press",
    "category": "strength",
    "force": null,
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Position a decline bench in the rack so that the bar will be above your chest. Load an appropriate weight and take your place on the bench.\nRotate the bar to unhook it from the rack and fully extend your arms. Your back should be slightly arched and your shoulder blades retracted. This will be your starting position.\nBegin the movement by flexing your arms, lowering the bar to your chest.\nPause briefly, and then extend your arms to push the weight back to the starting position.\nAfter completing the desired number of repetitions, rotate the bar to rack the weight.",
    "images": [
      "Smith_Machine_Decline_Press/0.jpg",
      "Smith_Machine_Decline_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Smith_Machine_Hang_Power_Clean",
    "name": "Smith Machine Hang Power Clean",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Position the bar at knee height and load it to an appropriate weight.\nTake a pronated grip on the bar outside of shoulder width and unhook the bar from the machine. Your arms should be fully extended with your head and chest up. Your elbows should be pointed out with your shoulders back and down. Your hips should be back, loading the tension into the hamstrings. This will be your starting position.\nInitate the movement by forcefully extending the hips and knees, accelerating into the bar. Ensure that you keep your arms straight during this part of the motion.\nUpon full extension, rebend the hips and knees to lower your receiving position.\nAllow the arms to flex at this point, rotating the elbows around the bar to receive it on your shoulders.\nExtend through the hips and knees to come to a standing position with the bar racked on your shoulders to complete the movement.",
    "images": [
      "Smith_Machine_Hang_Power_Clean/0.jpg",
      "Smith_Machine_Hang_Power_Clean/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "glutes",
      "lower back",
      "quadriceps",
      "shoulders",
      "traps"
    ]
  },
  {
    "id": "Smith_Machine_Hip_Raise",
    "name": "Smith Machine Hip Raise",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Position a bench in the rack and load the bar to an appropriate weight. Lie down on the bench, placing the bottom of your feet against the bar. Unlock the bar and extend your legs. You may need to use your hands to assist you. For added stability grasp the sides of the Smith Machine. This will be your starting position.\nInitiate the movement by rotating your pelvis, flexing your spine to raise your hips off of the bench. Maintain a slight bend in the knees throughout the motion.\nAfter a brief pause, return the hips to the bench.\nRepeat for the desired number of repetitions.",
    "images": [
      "Smith_Machine_Hip_Raise/0.jpg",
      "Smith_Machine_Hip_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Smith_Machine_Incline_Bench_Press",
    "name": "Smith Machine Incline Bench Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Place an incline bench underneath the smith machine. Place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Once the weight you need is selected, lie down on the incline bench and make sure your upper chest is aligned with the barbell. Using a pronated grip (palms facing forward) that is wider than shoulder width, unlock the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.\nAs you breathe in, come down slowly until you feel the bar on your upper chest.\nAfter a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions.\nWhen you are done, place the bar back in the rack.",
    "images": [
      "Smith_Machine_Incline_Bench_Press/0.jpg",
      "Smith_Machine_Incline_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Smith_Machine_Leg_Press",
    "name": "Smith Machine Leg Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "Position a Smith machine bar a couple feet off of the ground. Ensure that it is resting on the safeties. After loading the bar to an appropriate weight, lie underneath the bar. Place the middle of your feet on the bar, tucking your knees to your chest. This will be your starting position.\nBegin the movement by driving through your feet to move the bar upward, extending the hips and knees. Do not lock out your knees.\nAt the top of the motion, pause briefly before returning to the starting position.",
    "images": [
      "Smith_Machine_Leg_Press/0.jpg",
      "Smith_Machine_Leg_Press/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Smith_Machine_One-Arm_Upright_Row",
    "name": "Smith Machine One-Arm Upright Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "With the bar at thigh level, load an appropriate weight.\nTake a wide grip on the bar and unhook the weight, removing your off hand from the bar. Your arm should be extended as you stand up straight with your head and chest up. This will be your starting position.\nBegin the movement by flexing the elbow, raising the upper arm with the elbow pointed out. Continue until your upper arm is parallel to the floor.\nAfter a brief pause, return the weight to the starting position.\nRepeat for the desired number of repetitions before engaging the hooks to rack the weight.",
    "images": [
      "Smith_Machine_One-Arm_Upright_Row/0.jpg",
      "Smith_Machine_One-Arm_Upright_Row/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "biceps",
      "traps"
    ]
  },
  {
    "id": "Smith_Machine_Overhead_Shoulder_Press",
    "name": "Smith Machine Overhead Shoulder Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "To begin, place a flat bench (or preferably one with back support) underneath a smith machine. Position the barbell at a height so that when seated on the flat bench, the arms must be almost fully extended to reach the barbell.\nOnce you have the correct height, sit slightly in behind the barbell so that there is an imaginary straight line from the tip of your nose to the barbell. Your feet should be stationary. Grab the barbell with the palms facing forward, unlock it and lift it up so that your arms are fully extended. This is the starting position.\nSlowly begin to lower the barbell until it is level with your chin while inhaling.\nThen lift the barbell back to the starting position using your shoulders while exhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Smith_Machine_Overhead_Shoulder_Press/0.jpg",
      "Smith_Machine_Overhead_Shoulder_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Smith_Machine_Pistol_Squat",
    "name": "Smith Machine Pistol Squat",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "To begin, first set the bar to a position that best matches your height. Step under it and position the bar across the back of your shoulders.\nTake the bar with your hands facing forward, unlock it and lift it off the rack by extending your legs. 3\nMove one foot forward about 12 inches in front of the bar. Extend the other leg out in front of you, holding it off the ground. Look forward at all times and maintain a neutral or slightly arched spine. This will be your starting position.\nMaintaining good posture, lower yourself by flexing the knee and hip, going down as far as flexibility allows.\nPause briefly at the bottom and then return to the starting position by driving through the heel of your foot, extending the knee and hip.",
    "images": [
      "Smith_Machine_Pistol_Squat/0.jpg",
      "Smith_Machine_Pistol_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Smith_Machine_Reverse_Calf_Raises",
    "name": "Smith Machine Reverse Calf Raises",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Adjust the barbell on the smith machine to fit your height and align a raised platform right under the bar.\nStand on the platform with the heels of your feet secured on top of it with the balls of your feet extending off it. Position your toes facing forward with a shoulder width stance.\nNow, place your shoulders under the barbell while maintaining the foot positioning described and push the barbell up by extending your hips and knees until your torso is standing erect. The knees should be kept with a slight bend; never locked. This will be your starting position. Tip: The barbell on your back is only for balance purposes.\nRaise the balls of your feet as you breathe out by extending your toes as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position for a second before you start to go back down.\nSlowly go back down to the starting position as you breathe in by lowering the balls of your feet and toes.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Smith_Machine_Reverse_Calf_Raises/0.jpg",
      "Smith_Machine_Reverse_Calf_Raises/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Smith_Machine_Squat",
    "name": "Smith Machine Squat",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "To begin, first set the bar on the height that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\nHold on to the bar using both arms at each side (palms facing forward), unlock it and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nPosition your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance which targets overall development; however you can choose any of the three stances discussed in the foot stances section).\nBegin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the bar as you exhale by pushing the floor with the heel of your foot as you straighten the legs again and go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Smith_Machine_Squat/0.jpg",
      "Smith_Machine_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Smith_Machine_Stiff-Legged_Deadlift",
    "name": "Smith Machine Stiff-Legged Deadlift",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "To begin, set the bar on the smith machine to a height that is around the middle of your thighs. Once the correct height is chosen and the bar is loaded, grasp the bar using a pronated (palms forward) grip that is shoulder width apart. You may need some wrist wraps if using a significant amount of weight.\nLift the bar up by fully extending your arms while keeping your back straight. Stand with your torso straight and your legs spaced using a shoulder width or narrower stance. The knees should be slightly bent. This is your starting position.\nKeeping the knees stationary, lower the barbell to over the top of your feet by bending at the waist while keeping your back straight. Keep moving forward as if you were going to pick something from the floor until you feel a stretch on the hamstrings. Exhale as you perform this movement\nStart bringing your torso up straight again as soon as you feel the hamstrings stretch by extending your hips and waist until you are back at the starting position. Inhale as you perform this movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Smith_Machine_Stiff-Legged_Deadlift/0.jpg",
      "Smith_Machine_Stiff-Legged_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "glutes",
      "lower back"
    ]
  },
  {
    "id": "Smith_Machine_Upright_Row",
    "name": "Smith Machine Upright Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "To begin, set the bar on the smith machine to a height that is around the middle of your thighs. Once the correct height is chosen and the bar is loaded, grasp the bar using a pronated (palms forward) grip that is shoulder width apart. You may need some wrist wraps if using a significant amount of weight.\nLift the barbell up and fully extend your arms with your back straight. There should be a slight bend at the elbows. This is the starting position.\nUse your side shoulders to lift the bar as you exhale. The bar should be close to the body as you move it up. Continue to lift it until it nearly touches your chin. Tip: Your elbows should drive the motion. As you lift the bar, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement.\nLower the bar back down slowly to the starting position. Inhale as you perform this portion of the movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Smith_Machine_Upright_Row/0.jpg",
      "Smith_Machine_Upright_Row/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Smith_Single-Leg_Split_Squat",
    "name": "Smith Single-Leg Split Squat",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "machine",
    "instructions": "To begin, place a flat bench 2-3 feet behind the smith machine. Then, set the bar on the height that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\nHold on to the bar using both arms at each side (palms facing forward), unlock it and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nPosition your legs by placing one foot slightly forward under the bar and extending your other leg back and place the top of your foot on the bench. This will be your starting position\nBegin to slowly lower the bar by bending the knee as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calf becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knee should make an imaginary straight line with the toes that is perpendicular to the front. If your knee is past that imaginary line (if it is past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the bar as you exhale by pushing the floor with the heel of your foot mainly as you straighten your leg again and go back to the starting position.\nRepeat for the recommended amount of repetitions.\nSwitch legs and repeat the movement.",
    "images": [
      "Smith_Single-Leg_Split_Squat/0.jpg",
      "Smith_Single-Leg_Split_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Snatch_Pull",
    "name": "Snatch Pull",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "With a barbell on the floor close to the shins, take a wide snatch grip. Lower your hips with the weight focused on the heels, back straight, head facing forward, chest up, with your shoulders just in front of the bar. This will be your starting position.\nBegin the first pull by driving through the heels, extending your knees. Your back angle should stay the same, and your arms should remain straight. Move the weight with control as you continue to above the knees.\nNext comes the second pull, the main source of acceleration for the pull. As the bar approaches the mid-thigh position, begin extending through the hips. In a jumping motion, accelerate by extending the hips, knees, and ankles, using speed to move the bar upward.\nThere should be no need to actively pull through the arms to accelerate the weight; at the end of the second pull, the body should be fully extended, leaning slightly back. Full extension should be violent and abrupt, and ensure that you do not prolong the extension for longer than necessary.",
    "images": [
      "Snatch_Pull/0.jpg",
      "Snatch_Pull/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "lower back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Speed_Band_Overhead_Triceps",
    "name": "Speed Band Overhead Triceps",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "bands",
    "instructions": "For this exercise anchor a band to the ground. We used an incline bench and anchored the band to the base, standing over the bench. Alternatively, this could be performed standing on the band.\nTo begin, pull the band behind your head, holding it with a pronated grip and your elbows up. This will be your starting position.\nTo perform the movement, extend through the elbow to to straighten your arms, ensuring that you keep your upper arm in place.\nPause, and then return to the starting position.",
    "images": [
      "Speed_Band_Overhead_Triceps/0.jpg",
      "Speed_Band_Overhead_Triceps/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Speed_Box_Squat",
    "name": "Speed Box Squat",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Attach bands to the bar that are securely anchored near the ground. You may need to choke the bands to get adequate tension.\nUse a box of an appropriate height for this exercise. Load the bar to a weight that still requires effort, but isn't so heavy that speed is compromised. Typically, that will be between 50-70% of your one rep max.\nPosition the bar on your upper back, shoulder blades retracted, back arched and everything tight head to toe. This will be the starting position.\nUnrack the bar and position yourself in front of the box. Sit back with your hips until you are seated on the box, ensuring that you descend under control and don't crash onto the surface.\nPause briefly, and explode off of the box, extending through the hips and knees.",
    "images": [
      "Speed_Box_Squat/0.jpg",
      "Speed_Box_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Speed_Squats",
    "name": "Speed Squats",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\nHold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance which targets overall development; however you can choose any of the three stances discussed in the foot stances section).\nBegin to lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the bar as fast as possible without involving momentum as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again and go back to the starting position. Note: You should perform these exercises as fast as possible but without breaking perfect form and without involving momentum.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Speed_Squats/0.jpg",
      "Speed_Squats/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Spell_Caster",
    "name": "Spell Caster",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Hold a dumbbell in each hand with a pronated grip. Your feet should be wide with your hips and knees extended. This will be your starting position.\nBegin the movement by pulling both of the dumbbells to one side next to your hip, rotating your torso.\nKeeping your arms straight and the dumbbells parallel to the ground, rotate your torso to swing the weights to your opposite side.\nContinue alternating, rotating from one side to the other until the set is complete.",
    "images": [
      "Spell_Caster/0.jpg",
      "Spell_Caster/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "glutes",
      "shoulders"
    ]
  },
  {
    "id": "Spider_Crawl",
    "name": "Spider Crawl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Begin in a prone position on the floor. Support your weight on your hands and toes, with your feet together and your body straight. Your arms should be bent to 90 degrees. This will be your starting position.\nInitiate the movement by raising one foot off of the ground. Externally rotate the leg and bring the knee toward your elbow, as far forward as possible.\nReturn this leg to the starting position and repeat on the opposite side.",
    "images": [
      "Spider_Crawl/0.jpg",
      "Spider_Crawl/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Spider_Curl",
    "name": "Spider Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "e-z curl bar",
    "instructions": "Start out by setting the bar on the part of the preacher bench that you would normally sit on. Make sure to align the barbell properly so that it is balanced and will not fall off.\nMove to the front side of the preacher bench (the part where the arms usually lay) and position yourself to lay at a 45 degree slant with your torso and stomach pressed against the front side of the preacher bench.\nMake sure that your feet (especially the toes) are well positioned on the floor and place your upper arms on top of the pad located on the inside part of the preacher bench.\nUse your arms to grab the barbell with a supinated grip (palms facing up) at about shoulder width apart or slightly closer from each other.\nSlowly begin to lift the barbell upwards and exhale. Hold the contracted position for a second as you squeeze the biceps.\nSlowly begin to bring the barbell back to the starting position as your breathe in. .\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Spider_Curl/0.jpg",
      "Spider_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Split_Squat_with_Dumbbells",
    "name": "Split Squat with Dumbbells",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Position yourself into a staggered stance with the rear foot elevated and front foot forward.\nHold a dumbbell in each hand, letting them hang at the sides. This will be your starting position.\nBegin by descending, flexing your knee and hip to lower your body down. Maintain good posture througout the movement. Keep the front knee in line with the foot as you perform the exercise.\nAt the bottom of the movement, drive through the heel to extend the knee and hip to return to the starting position.",
    "images": [
      "Split_Squat_with_Dumbbells/0.jpg",
      "Split_Squat_with_Dumbbells/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Squat_Jerk",
    "name": "Squat Jerk",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Standing with the weight racked on the front of the shoulders, begin with the dip. With your feet directly under your hips, flex the knees without moving the hips backward. Go down only slightly, and reverse direction as powerfully as possible. Drive through the heels create as much speed and force as possible, and be sure to move your head out of the way as the bar leaves the shoulders.\nAt this moment as the feet leave the floor, the feet must be placed into the receiving position as quickly as possible. In the brief moment the feet are not actively driving against the platform, the athlete's effort to push the bar up will drive them down. The feet should move forcefully to just outside the hips, turned out as necessary. Receive the bar with your body in a full squat and the arms fully extended overhead.\nKeeping the bar aligned over the front of the heels, your head and chest up, drive throught heels of the feet to move to a standing position. Carefully return the weight to floor.",
    "images": [
      "Squat_Jerk/0.jpg",
      "Squat_Jerk/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Squat_with_Bands",
    "name": "Squat with Bands",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Set up the bands on the sleeves, secured to either band pegs, the rack, or dumbbells so that there is appropriate tension.\nBegin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wide for more emphasis on the back, glutes, adductors, and hamstrings. Keep your head facing forward.\nWith your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips as much as possible. Ideally, your shins should be perpendicular to the ground. Lower bar position necessitates a greater torso lean to keep the bar over the heels. Continue until you break parallel, which is defined as the crease of the hip being in line with the top of the knee.\nKeeping the weight on your heels and pushing your feet and knees out, drive upward as you lead the movement with your head. Continue upward, maintaining tightness head to toe, until you have returned to the starting position.",
    "images": [
      "Squat_with_Bands/0.jpg",
      "Squat_with_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "adductors",
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Squat_with_Chains",
    "name": "Squat with Chains",
    "category": "powerlifting",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "To set up the chains, begin by looping the leader chain over the sleeves of the bar. The heavy chain should be attached using a snap hook. Adjust the length of the lead chain so that a few links are still on the floor at the top of the movement.\nBegin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wide for more emphasis on the back, glutes, adductors, and hamstrings. Keep your head facing forward.\nWith your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips as much as possible. Ideally, your shins should be perpendicular to the ground. Lower bar position necessitates a greater torso lean to keep the bar over the heels. Continue until you break parallel, which is defined as the crease of the hip being in line with the top of the knee.\nKeeping the weight on your heels and pushing your feet and knees out, drive upward as you lead the movement with your head. Continue upward, maintaining tightness head to toe, until you have returned to the starting position.",
    "images": [
      "Squat_with_Chains/0.jpg",
      "Squat_with_Chains/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "adductors",
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Squat_with_Plate_Movers",
    "name": "Squat with Plate Movers",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "To begin, first set the bar on a rack to just below shoulder level. Position a weight plate on the ground a couple feet back from the rack. Once the bar is loaded, step under it and place the back of your shoulders across it.\nHold on to the bar with both hands and lift it off the rack by first pushing with your legs and at the same time straighten your torso.\nStep away from the rack and adopt a wide stance with the toes slightly pointed out, with one foot on the weight plate. Keep your head up at all times. This will be your starting position.\nBegin to slowly lower the bar by bending the knees and hips. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees.\nRaise the bar as you exhale by pushing the floor with the heels of your feet as you extend the hips and knees.\nAt the top of the movement, side step, bringing your feet together on the opposite side of the plate.\nUsing your inside foot, push the weight plate, sliding it across the floor to where you were just standing.\nPlace your inside foot on the weight plate, adopting a wide stance for the next repetition.",
    "images": [
      "Squat_with_Plate_Movers/0.jpg",
      "Squat_with_Plate_Movers/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "abductors",
      "adductors",
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Squats_-_With_Bands",
    "name": "Squats - With Bands",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "To start out, make sure that the exercise band is at an even split between both the left and right side of the body. To do this, use your hands to grab both sides of the band and place both feet in the middle of the band. Your feet should be shoulder width apart from each other.\nWhen holding the bands, they should be the same height on each side. You should be using a pronated grip (palms facing forward) and have the handles of the bands next to your face for this exercise. This is the starting position.\nSlowly start to bend the knees and lower the legs so that your thighs are parallel to the floor while exhaling.\nUse the heel of your feet to push your body up to the starting position as you exhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Squats_-_With_Bands/0.jpg",
      "Squats_-_With_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Stairmaster",
    "name": "Stairmaster",
    "category": "cardio",
    "force": null,
    "level": "intermediate",
    "mechanic": null,
    "equipment": "machine",
    "instructions": "To begin, step onto the stairmaster and select the desired option from the menu. You can choose a manual setting, or you can select a program to run. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise.\nPump your legs up and down in an established rhythm, driving the pedals down but not all the way to the floor. It is recommended that you maintain your grip on the handles so that you don't fall. The handles can be used to monitor your heart rate to help you stay at an appropriate intensity.\nStairmasters offer convenience, cardiovascular benefits, and usually have less impact than running outside. They are typically much harder than other cardio equipment. A 150 lb person will typically burn over 300 calories in 30 minutes, compared to about 175 calories walking.",
    "images": [
      "Stairmaster/0.jpg",
      "Stairmaster/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Standing_Alternating_Dumbbell_Press",
    "name": "Standing Alternating Dumbbell Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Stand with a dumbbell in each hand. Raise the dumbbells to your shoulders with your palms facing forward and your elbows pointed out. This will be your starting position.\nExtend one arm to press the dumbbell straight up, keeping your off hand in place. Do not lean or jerk the weight during the movement.\nAfter a brief pause, return the weight to the starting position.\nRepeat for the opposite side, continuing to alternate between arms.",
    "images": [
      "Standing_Alternating_Dumbbell_Press/0.jpg",
      "Standing_Alternating_Dumbbell_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Standing_Barbell_Calf_Raise",
    "name": "Standing Barbell Calf Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the bar on the back of your shoulders (slightly below the neck).\nHold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. The knees should be kept with a slight bend; never locked. This will be your starting position. Tip: For better range of motion you may also place the ball of your feet on a wooden block but be careful as this option requires more balance and a sturdy block.\nRaise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down.\nGo back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Barbell_Calf_Raise/0.jpg",
      "Standing_Barbell_Calf_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Barbell_Press_Behind_Neck",
    "name": "Standing Barbell Press Behind Neck",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for easier pick up of the bar. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\nHold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Your back should be kept straight while performing this exercise. This will be your starting position.\nElevate the barbell overhead by fully extending your arms while breathing out.\nHold the contraction for a second and lower the barbell back down to the starting position by inhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Barbell_Press_Behind_Neck/0.jpg",
      "Standing_Barbell_Press_Behind_Neck/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Standing_Bent-Over_One-Arm_Dumbbell_Triceps_Extension",
    "name": "Standing Bent-Over One-Arm Dumbbell Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "With a dumbbell in one hand and the palm facing your torso, bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Make sure that you keep the head up.\nThe upper arm should be close to the torso and parallel to the floor while the forearm is pointing towards the floor as the hand holds the weight. Tip: There should be a 90-degree angle between the forearm and the upper arm. This is your starting position.\nKeeping the upper arms stationary, use the triceps to lift the weights as you exhale until the forearms are parallel to the floor and the whole arm is extended. Like many other arm exercises, only the forearm moves.\nAfter a second contraction at the top, slowly lower the dumbbell back to the starting position as you inhale.\nRepeat the movement for the prescribed amount of repetitions.\nSwitch arms and repeat the exercise.",
    "images": [
      "Standing_Bent-Over_One-Arm_Dumbbell_Triceps_Extension/0.jpg",
      "Standing_Bent-Over_One-Arm_Dumbbell_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Standing_Bent-Over_Two-Arm_Dumbbell_Triceps_Extension",
    "name": "Standing Bent-Over Two-Arm Dumbbell Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "With a dumbbell in each hand and the palms facing your torso, bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Make sure that you keep the head up. The upper arms should be close to the torso and parallel to the floor while the forearms are pointing towards the floor as the hands hold the weights. Tip: There should be a 90-degree angle between the forearms and the upper arm. This is your starting position.\nKeeping the upper arms stationary, use the triceps to lift the weights as you exhale until the forearms are parallel to the floor and the whole arms are extended. Like many other arm exercises, only the forearm moves.\nAfter a second contraction at the top, slowly lower the dumbbells back to their starting position as you inhale.\nRepeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Standing_Bent-Over_Two-Arm_Dumbbell_Triceps_Extension/0.jpg",
      "Standing_Bent-Over_Two-Arm_Dumbbell_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Biceps_Cable_Curl",
    "name": "Standing Biceps Cable Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Stand up with your torso upright while holding a cable curl bar that is attached to a low pulley. Grab the cable bar at shoulder width and keep the elbows close to the torso. The palm of your hands should be facing up (supinated grip). This will be your starting position.\nWhile holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle.\nSlowly begin to bring the curl bar back to starting position as your breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Biceps_Cable_Curl/0.jpg",
      "Standing_Biceps_Cable_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Bradford_Press",
    "name": "Standing Bradford Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Place a loaded bar at shoulder level in a rack. With a pronated grip at shoulder width, begin with the bar racked across the front of your shoulders. This is your starting position.\nInitiate the lift by extending the elbows to press the bar overhead. Avoid locking out the elbow as you move the weight behind your head.\nLower the bar down to the back of the head until your elbow forms a right angle.\nLift the bar back over your head by extending the elbows\nLower the bar down to the starting position.\nAlternate in this manner until you complete the recommended amount of repetitions.",
    "images": [
      "Standing_Bradford_Press/0.jpg",
      "Standing_Bradford_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Standing_Cable_Chest_Press",
    "name": "Standing Cable Chest Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Position dual pulleys to chest height and select an appropriate weight. Stand a foot or two in front of the cables, holding one in each hand. You can stagger your stance for better stability.\nPosition the upper arm at a 90 degree angle with the shoulder blades together. This will be your starting position.\nKeeping the rest of the body stationary, extend through the elbows to press the handles forward, drawing them together in front of you.\nPause at the top of the motion, and return to the starting position.",
    "images": [
      "Standing_Cable_Chest_Press/0.jpg",
      "Standing_Cable_Chest_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Standing_Cable_Lift",
    "name": "Standing Cable Lift",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Connect a standard handle on a tower, and move the cable to the lowest pulley position.\nWith your side to the cable, grab the handle with one hand and step away from the tower. You should be approximately arm's length away from the pulley, with the tension of the weight on the cable. Your outstretched arm should be aligned with the cable.\nWith your feet positioned shoulder width apart, squat down and grab the handle with both hands. Your arms should still be fully extended.\nIn one motion, pull the handle up and across your body until your arms are in a fully-extended position above your head.\nKeep your back straight and your arms close to your body as you pivot your back foot and straighten your legs to get a full range of motion.\nRetract your arms and then your body. Return to the neutral position in a slow and controlled manner.\nRepeat to failure.\nThen, reposition and repeat the same series of movements on the opposite side.",
    "images": [
      "Standing_Cable_Lift/0.jpg",
      "Standing_Cable_Lift/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Standing_Cable_Wood_Chop",
    "name": "Standing Cable Wood Chop",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Connect a standard handle to a tower, and move the cable to the highest pulley position.\nWith your side to the cable, grab the handle with one hand and step away from the tower. You should be approximately arm's length away from the pulley, with the tension of the weight on the cable. Your outstretched arm should be aligned with the cable.\nWith your feet positioned shoulder width apart, reach upward with your other hand and grab the handle with both hands. Your arms should still be fully extended.\nIn one motion, pull the handle down and across your body to your front knee while rotating your torso.\nKeep your back and arms straight and core tight while you pivot your back foot and bend your knees to get a full range of motion.\nMaintain your stance and straight arms. Return to the neutral position in a slow and controlled manner.\nRepeat to failure.\nThen, reposition and repeat the same series of movements on the opposite side.",
    "images": [
      "Standing_Cable_Wood_Chop/0.jpg",
      "Standing_Cable_Wood_Chop/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Standing_Calf_Raises",
    "name": "Standing Calf Raises",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Adjust the padded lever of the calf raise machine to fit your height.\nPlace your shoulders under the pads provided and position your toes facing forward (or using any of the two other positions described at the beginning of the chapter). The balls of your feet should be secured on top of the calf block with the heels extending off it. Push the lever up by extending your hips and knees until your torso is standing erect. The knees should be kept with a slight bend; never locked. Toes should be facing forward, outwards or inwards as described at the beginning of the chapter. This will be your starting position.\nRaise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down.\nGo back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Calf_Raises/0.jpg",
      "Standing_Calf_Raises/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Concentration_Curl",
    "name": "Standing Concentration Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Taking a dumbbell in your working hand, lean forward. Allow your working arm to hang perpendicular to the ground with the elbow pointing out. This will be your starting position.\nFlex the elbow to curl the weight, keeping the upper arm stationary. At the top of the repetition, flex the biceps and pause.\nLower the dumbbell back to the starting position.\nRepeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Standing_Concentration_Curl/0.jpg",
      "Standing_Concentration_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Standing_Dumbbell_Calf_Raise",
    "name": "Standing Dumbbell Calf Raise",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand with your torso upright holding two dumbbells in your hands by your sides. Place the ball of the foot on a sturdy and stable wooden board (that is around 2-3 inches tall) while your heels extend off and touch the floor. This will be your starting position.\nWith the toes pointing either straight (to hit all parts equally), inwards (for emphasis on the outer head) or outwards (for emphasis on the inner head), raise the heels off the floor as you exhale by contracting the calves. Hold the top contraction for a second.\nAs you inhale, go back to the starting position by slowly lowering the heels.\nRepeat for the recommended amount of times.",
    "images": [
      "Standing_Dumbbell_Calf_Raise/0.jpg",
      "Standing_Dumbbell_Calf_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Dumbbell_Press",
    "name": "Standing Dumbbell Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Standing with your feet shoulder width apart, take a dumbbell in each hand. Raise the dumbbells to head height, the elbows out and about 90 degrees. This will be your starting position.\nMaintaining strict technique with no leg drive or leaning back, extend through the elbow to raise the weights together directly above your head.\nPause, and slowly return the weight to the starting position.",
    "images": [
      "Standing_Dumbbell_Press/0.jpg",
      "Standing_Dumbbell_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Standing_Dumbbell_Reverse_Curl",
    "name": "Standing Dumbbell Reverse Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "To begin, stand straight with a dumbbell in each hand using a pronated grip (palms facing down). Your arms should be fully extended while your feet are shoulder width apart from each other. This is the starting position.\nWhile holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the muscle.\nSlowly begin to bring the dumbbells back to starting position as your breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Dumbbell_Reverse_Curl/0.jpg",
      "Standing_Dumbbell_Reverse_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Standing_Dumbbell_Straight-Arm_Front_Delt_Raise_Above_Head",
    "name": "Standing Dumbbell Straight-Arm Front Delt Raise Above Head",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Hold the dumbbells in front of your thighs, palms facing your thighs.\nKeep your arms straight with a slight bend at the elbows but keep them locked. This will be your starting position.\nRaise the dumbbells in a semicircular motion to arm's length overhead as you exhale.\nSlowly return to the starting position using the same path as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Dumbbell_Straight-Arm_Front_Delt_Raise_Above_Head/0.jpg",
      "Standing_Dumbbell_Straight-Arm_Front_Delt_Raise_Above_Head/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Dumbbell_Triceps_Extension",
    "name": "Standing Dumbbell Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "To begin, stand up with a dumbbell held by both hands. Your feet should be about shoulder width apart from each other. Slowly use both hands to grab the dumbbell and lift it over your head until both arms are fully extended.\nThe resistance should be resting in the palms of your hands with your thumbs around it. The palm of the hands should be facing up towards the ceiling. This will be your starting position.\nKeeping your upper arms close to your head with elbows in and perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step.\nGo back to the starting position by using the triceps to raise the dumbbell. Breathe out as you perform this step.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Dumbbell_Triceps_Extension/0.jpg",
      "Standing_Dumbbell_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Dumbbell_Upright_Row",
    "name": "Standing Dumbbell Upright Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Grasp a dumbbell in each hand with a pronated (palms forward) grip that is slightly less than shoulder width. The dumbbells should be resting on top of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position.\nUse your side shoulders to lift the dumbbells as you exhale. The dumbbells should be close to the body as you move it up and the elbows should drive the motion. Continue to lift them until they nearly touch your chin. Tip: Your elbows should drive the motion. As you lift the dumbbells, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement.\nLower the dumbbells back down slowly to the starting position. Inhale as you perform this portion of the movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Dumbbell_Upright_Row/0.jpg",
      "Standing_Dumbbell_Upright_Row/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": [
      "biceps",
      "shoulders"
    ]
  },
  {
    "id": "Standing_Front_Barbell_Raise_Over_Head",
    "name": "Standing Front Barbell Raise Over Head",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "To begin, stand straight with a barbell in your hands. You should grip the bar with palms facing down and a closer than shoulder width grip apart from each other.\nYour feet should be shoulder width apart from each other. Your elbows should be slightly bent. This is the starting position.\nLift the barbell up until it is directly over your head while exhaling. Make sure to keep your elbows slightly bent when performing each repetition.\nOnce you feel the contraction, begin to lower the barbell back down to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Front_Barbell_Raise_Over_Head/0.jpg",
      "Standing_Front_Barbell_Raise_Over_Head/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Inner-Biceps_Curl",
    "name": "Standing Inner-Biceps Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand up with a dumbbell in each hand being held at arms length. The elbows should be close to the torso. Your legs should be at about shoulder's width apart from each other.\nRotate the palms of the hands so that they are facing inward in a neutral position. This will be your starting position.\nWhile holding the upper arms stationary, curl the weights out while contracting the biceps as you breathe out. Your wrist should turn so that when the weights are fully elevated you have supinated grip (palms facing up).\nOnly the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Tip: Keep the forearms aligned with your outer deltoids.\nHold the contracted position for a second as you squeeze the biceps.\nSlowly begin to bring the dumbbells back to the starting position as your breathe in. Remember to rotate the wrists as you lower the weight in order to switch back to a neutral grip.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Inner-Biceps_Curl/0.jpg",
      "Standing_Inner-Biceps_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Leg_Curl",
    "name": "Standing Leg Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "Adjust the machine lever to fit your height and lie with your torso bent at the waist facing forward around 30-45 degrees (since an angled position is more favorable for hamstrings recruitment) with the pad of the lever on the back of your right leg (just a few inches under the calves) and the front of the right leg on top of the machine pad.\nKeeping the torso bent forward, ensure your leg is fully stretched and grab the side handles of the machine. Position your toes straight. This will be your starting position.\nAs you exhale, curl your right leg up as far as possible without lifting the upper leg from the pad. Once you hit the fully contracted position, hold it for a second.\nAs you inhale, bring the legs back to the initial position. Repeat for the recommended amount of repetitions.\nPerform the same exercise now for the left leg.",
    "images": [
      "Standing_Leg_Curl/0.jpg",
      "Standing_Leg_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Low-Pulley_Deltoid_Raise",
    "name": "Standing Low-Pulley Deltoid Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Start by standing to the right side of a low pulley row. Use your left hand to come across the body and grab a single handle attached to the low pulley with a pronated grip (palms facing down). Rest your arm in front of you. Your right hand should grab the machine for better support and balance.\nMake sure that your back is erect and your feet are shoulder width apart from each other. This is the starting position.\nBegin to use the left hand and come across your body out until it is elevated to shoulder height while exhaling.\nFeel the contraction at the top for a second and begin to slowly lower the handle back down to the original starting position while inhaling.\nRepeat for the recommended amount of repetitions.\nSwitch arms and repeat the exercise.",
    "images": [
      "Standing_Low-Pulley_Deltoid_Raise/0.jpg",
      "Standing_Low-Pulley_Deltoid_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Standing_Low-Pulley_One-Arm_Triceps_Extension",
    "name": "Standing Low-Pulley One-Arm Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Grab a single handle with your left arm next to the low pulley machine. Turn away from the machine keeping the handle to the side of your body with your arm fully extended. Now use both hands to elevate the single handle directly above the head with the palm facing forward. Keep your upper arm completely vertical (perpendicular to the floor) and put your right hand on your left elbow to help keep it steady. This is the starting position.\nKeeping your upper arms close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step.\nGo back to the starting position by using the triceps to raise the single handle. Breathe out as you perform this step.\nRepeat for the recommended amount of repetitions.\nSwitch arms and repeat the exercise.",
    "images": [
      "Standing_Low-Pulley_One-Arm_Triceps_Extension/0.jpg",
      "Standing_Low-Pulley_One-Arm_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Standing_Military_Press",
    "name": "Standing Military Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Start by placing a barbell that is about chest high on a squat rack. Once you have selected the weights, grab the barbell using a pronated (palms facing forward) grip. Make sure to grip the bar wider than shoulder width apart from each other.\nSlightly bend the knees and place the barbell on your collar bone. Lift the barbell up keeping it lying on your chest. Take a step back and position your feet shoulder width apart from each other.\nOnce you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position.\nLower the bar down to the collarbone slowly as you inhale.\nLift the bar back up to the starting position as you exhale.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Military_Press/0.jpg",
      "Standing_Military_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Standing_Olympic_Plate_Hand_Squeeze",
    "name": "Standing Olympic Plate Hand Squeeze",
    "category": "strength",
    "force": "static",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "To begin, stand straight while holding a weight plate by the ridge at arm's length in each hand using a neutral grip (palms facing in). You feet should be shoulder width apart from each other. This will be your starting position.\nLower the plates until the fingers are nearly extended but can still hold weights. Inhale as you lower the plates.\nNow raise the plates back to the starting position as you exhale by closing your hands.\nRepeat for the recommended amount of repetitions prescribed in your program.",
    "images": [
      "Standing_Olympic_Plate_Hand_Squeeze/0.jpg",
      "Standing_Olympic_Plate_Hand_Squeeze/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": [
      "biceps"
    ]
  },
  {
    "id": "Standing_One-Arm_Cable_Curl",
    "name": "Standing One-Arm Cable Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Start out by grabbing single handle next to the low pulley machine. Make sure you are far enough from the machine so that your arm is supporting the weight.\nMake sure that your upper arm is stationary, perpendicular to the floor with elbows in and palms facing forward. Your non lifting arm should be grabbing your waist. This will allow you to keep your balance.\nSlowly begin to curl the single handle upwards while keeping the upper arm stationary until your forearm touches your bicep while exhaling. Tip: Only the forearm should move.\nHold the contraction position as you squeeze the bicep and then lower the single handle back down to the starting position as you inhale.\nRepeat for the recommended amount of repetitions.\nSwitch arms while performing this exercise.",
    "images": [
      "Standing_One-Arm_Cable_Curl/0.jpg",
      "Standing_One-Arm_Cable_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_One-Arm_Dumbbell_Curl_Over_Incline_Bench",
    "name": "Standing One-Arm Dumbbell Curl Over Incline Bench",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand on the back side of an incline bench as if you were going to be a spotter for someone. Have a dumbbell in one hand and rest it across the incline bench with a supinated (palms up) grip.\nPosition your non lifting hand at the corner or side of the incline bench. The chest should be pressed against the top part of the incline and your feet should be pressed against the floor at a wide stance. This is the starting position.\nWhile holding the upper arm stationary, curl the dumbbell upward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a second.\nSlowly begin to bring the dumbbells back to starting position as your breathe in.\nRepeat for the recommended amount of repetitions.\nSwitch arms while performing this exercise.",
    "images": [
      "Standing_One-Arm_Dumbbell_Curl_Over_Incline_Bench/0.jpg",
      "Standing_One-Arm_Dumbbell_Curl_Over_Incline_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_One-Arm_Dumbbell_Triceps_Extension",
    "name": "Standing One-Arm Dumbbell Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "To begin, stand up with a dumbbell held in one hand. Your feet should be about shoulder width apart from each other. Now fully extend the arm with the dumbbell over your head. Tip: The small finger of your hand should be facing the ceiling and the palm of your hand should be facing forward. The dumbbell should be above your head.\nThis will be your starting position.\nKeeping your upper arm close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearm touch your bicep. Tip: The upper arm should remain stationary and only the forearm should move. Breathe in as you perform this step.\nGo back to the starting position by using the triceps to raise the dumbbell. Breathe out as you perform this step.\nRepeat for the recommended amount of repetitions.\nSwitch arms and repeat the exercise.",
    "images": [
      "Standing_One-Arm_Dumbbell_Triceps_Extension/0.jpg",
      "Standing_One-Arm_Dumbbell_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Standing_Overhead_Barbell_Triceps_Extension",
    "name": "Standing Overhead Barbell Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "To begin, stand up holding a barbell or e-z bar using a pronated grip (palms facing forward) with your hands closer than shoulder width apart from each other. Your feet should be about shoulder width apart.\nNow elevate the barbell above your head until your arms are fully extended. Keep your elbows in. This will be your starting position.\nKeeping your upper arms close to your head and elbows in, perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step.\nGo back to the starting position by using the triceps to raise the barbell. Breathe out as you perform this step.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Overhead_Barbell_Triceps_Extension/0.jpg",
      "Standing_Overhead_Barbell_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Standing_Palm-In_One-Arm_Dumbbell_Press",
    "name": "Standing Palm-In One-Arm Dumbbell Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Start by having a dumbbell in one hand with your arm fully extended to the side using a neutral grip. Use your other arm to hold on to an incline bench to keep your balance.\nYour feet should be shoulder width apart from each other. Now slowly lift the dumbbell up until you create a 90 degree angle with your arm. Note: Your forearm should be perpendicular to the floor. Continue to maintain a neutral grip throughout the entire exercise.\nSlowly lift the dumbbell up until your arm is fully extended. This the starting position.\nWhile inhaling lower the weight down until your arm is at a 90 degree angle again.\nFeel the contraction for a second and then lift the weight back up towards the starting position while exhaling. Remember to hold on to the incline bench and keep your feet positioned to keep balance during the exercise.\nRepeat for the recommended amount of repetitions.\nSwitch arms and repeat the exercise.",
    "images": [
      "Standing_Palm-In_One-Arm_Dumbbell_Press/0.jpg",
      "Standing_Palm-In_One-Arm_Dumbbell_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Standing_Palms-In_Dumbbell_Press",
    "name": "Standing Palms-In Dumbbell Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Start by having a dumbbell in each hand with your arm fully extended to the side using a neutral grip. Your feet should be shoulder width apart from each other. Now slowly lift the dumbbells up until you create a 90 degree angle with your arms. Note: Your forearms should be perpendicular to the floor. This the starting position.\nContinue to maintain a neutral grip throughout the entire exercise. Slowly lift the dumbbells up until your arms are fully extended.\nWhile inhaling lower the weights down until your arm is at a 90 degree angle again.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Palms-In_Dumbbell_Press/0.jpg",
      "Standing_Palms-In_Dumbbell_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Standing_Palms-Up_Barbell_Behind_The_Back_Wrist_Curl",
    "name": "Standing Palms-Up Barbell Behind The Back Wrist Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Start by standing straight and holding a barbell behind your glutes at arm's length while using a pronated grip (palms will be facing back away from the glutes) and having your hands shoulder width apart from each other.\nYou should be looking straight forward while your feet are shoulder width apart from each other. This is the starting position.\nWhile exhaling, slowly elevate the barbell up by curling your wrist in a semi-circular motion towards the ceiling. Note: Your wrist should be the only body part moving for this exercise.\nHold the contraction for a second and lower the barbell back down to the starting position while inhaling.\nRepeat for the recommended amount of repetitions.\nWhen finished, lower the barbell down to the squat rack or the floor by bending the knees. Tip: It is easiest to either pick it up from a squat rack or have a partner hand it to you.",
    "images": [
      "Standing_Palms-Up_Barbell_Behind_The_Back_Wrist_Curl/0.jpg",
      "Standing_Palms-Up_Barbell_Behind_The_Back_Wrist_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Rope_Crunch",
    "name": "Standing Rope Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Attach a rope to a high pulley and select an appropriate weight.\nStand with your back to the cable tower. Take the rope with both hands over your shoulders, holding it to your upper chest. This will be your starting position.\nPerform the movement by flexing the spine, crunching the weight down as far as you can.\nHold the peak contraction for a moment before returning to the starting position.",
    "images": [
      "Standing_Rope_Crunch/0.jpg",
      "Standing_Rope_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Standing_Towel_Triceps_Extension",
    "name": "Standing Towel Triceps Extension",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "To begin, stand up with both arms fully extended above the head holding one end of a towel with both hands. Your elbows should be in and the arms perpendicular to the floor with the palms facing each other while your feet should be shoulder width apart from each other. This is the starting position.\nNow communicate with your partner so that he/she can grip the other side of the towel to apply resistance. Keeping your upper arms close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step.\nGo back to the starting position by using the triceps to raise the towel. Breathe out as you perform this step.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Standing_Towel_Triceps_Extension/0.jpg",
      "Standing_Towel_Triceps_Extension/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Step-up_with_Knee_Raise",
    "name": "Step-up with Knee Raise",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Stand facing a box or bench of an appropriate height with your feet together. This will be your starting position.\nBegin the movement by stepping up, putting your left foot on the top of the bench. Extend through the hip and knee of your front leg to stand up on the box. As you stand on the box with your left leg, flex your right knee and hip, bringing your knee as high as you can.\nReverse this motion to step down off the box, and then repeat the sequence on the opposite leg.",
    "images": [
      "Step-up_with_Knee_Raise/0.jpg",
      "Step-up_with_Knee_Raise/1.jpg"
    ],
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "quadriceps"
    ]
  },
  {
    "id": "Step_Mill",
    "name": "Step Mill",
    "category": "cardio",
    "force": null,
    "level": "intermediate",
    "mechanic": null,
    "equipment": "machine",
    "instructions": "To begin, step onto the stepmill and select the desired option from the menu. You can choose a manual setting, or you can select a program to run. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. Use caution so that you don't trip as you climb the stairs. It is recommended that you maintain your grip on the handles so that you don't fall.\nStepmills offer convenience, cardiovascular benefits, and usually have less impact than running outside while offering a similar rate of calories burned. They are typically much harder than other cardio equipment. A 150 lb person will typically burn over 300 calories in 30 minutes, compared to about 175 calories walking.",
    "images": [
      "Step_Mill/0.jpg",
      "Step_Mill/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Stiff-Legged_Barbell_Deadlift",
    "name": "Stiff-Legged Barbell Deadlift",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Grasp a bar using an overhand grip (palms facing down). You may need some wrist wraps if using a significant amount of weight.\nStand with your torso straight and your legs spaced using a shoulder width or narrower stance. The knees should be slightly bent. This is your starting position.\nKeeping the knees stationary, lower the barbell to over the top of your feet by bending at the hips while keeping your back straight. Keep moving forward as if you were going to pick something from the floor until you feel a stretch on the hamstrings. Inhale as you perform this movement.\nStart bringing your torso up straight again by extending your hips until you are back at the starting position. Exhale as you perform this movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Stiff-Legged_Barbell_Deadlift/0.jpg",
      "Stiff-Legged_Barbell_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "glutes",
      "lower back"
    ]
  },
  {
    "id": "Stiff-Legged_Dumbbell_Deadlift",
    "name": "Stiff-Legged Dumbbell Deadlift",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Grasp a couple of dumbbells holding them by your side at arm's length.\nStand with your torso straight and your legs spaced using a shoulder width or narrower stance. The knees should be slightly bent. This is your starting position.\nKeeping the knees stationary, lower the dumbbells to over the top of your feet by bending at the waist while keeping your back straight. Keep moving forward as if you were going to pick something from the floor until you feel a stretch on the hamstrings. Exhale as you perform this movement\nStart bringing your torso up straight again by extending your hips and waist until you are back at the starting position. Inhale as you perform this movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Stiff-Legged_Dumbbell_Deadlift/0.jpg",
      "Stiff-Legged_Dumbbell_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "glutes",
      "lower back"
    ]
  },
  {
    "id": "Stiff_Leg_Barbell_Good_Morning",
    "name": "Stiff Leg Barbell Good Morning",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\nHold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a shoulder width medium stance. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position.\nKeeping your legs stationary, move your torso forward by bending at the hips while inhaling. Lower your torso until it is parallel with the floor.\nBegin to raise the bar as you exhale by elevating your torso back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Stiff_Leg_Barbell_Good_Morning/0.jpg",
      "Stiff_Leg_Barbell_Good_Morning/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Straight-Arm_Dumbbell_Pullover",
    "name": "Straight-Arm Dumbbell Pullover",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "dumbbell",
    "instructions": "Place a dumbbell standing up on a flat bench.\nEnsuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench (torso across it as in forming a cross) with only your shoulders lying on the surface. Hips should be below the bench and legs bent with feet firmly on the floor. The head will be off the bench as well.\nGrasp the dumbbell with both hands and hold it straight over your chest at arms length. Both palms should be pressing against the underside one of the sides of the dumbbell. This will be your starting position.\nCaution: Always ensure that the dumbbell used for this exercise is secure. Using a dumbbell with loose plates can result in the dumbbell falling apart and falling on your face.\nWhile keeping your arms straight, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest.\nAt that point, bring the dumbbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement.\nHold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.",
    "images": [
      "Straight-Arm_Dumbbell_Pullover/0.jpg",
      "Straight-Arm_Dumbbell_Pullover/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "lats",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Straight-Arm_Pulldown",
    "name": "Straight-Arm Pulldown",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "You will start by grabbing the wide bar from the top pulley of a pulldown machine and using a wider than shoulder-width pronated (palms down) grip. Step backwards two feet or so.\nBend your torso forward at the waist by around 30-degrees with your arms fully extended in front of you and a slight bend at the elbows. If your arms are not fully extended then you need to step a bit more backwards until they are. Once your arms are fully extended and your torso is slightly bent at the waist, tighten the lats and then you are ready to begin.\nWhile keeping the arms straight, pull the bar down by contracting the lats until your hands are next to the side of the thighs. Breathe out as you perform this step.\nWhile keeping the arms straight, go back to the starting position while breathing in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Straight-Arm_Pulldown/0.jpg",
      "Straight-Arm_Pulldown/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Straight_Bar_Bench_Mid_Rows",
    "name": "Straight Bar Bench Mid Rows",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Place a loaded barbell on the end of a bench. Standing on the bench behind the bar, take a medium, pronated grip. Stand with your hips back and chest up, maintaining a neutral spine. This will be your starting position.\nRow the bar to your torso by retracting the shoulder blades and flexing the elbows. Use a controlled movement with no jerking.\nAfter a brief pause, slowly return the bar to the starting position, ensuring to go all the way down.",
    "images": [
      "Straight_Bar_Bench_Mid_Rows/0.jpg",
      "Straight_Bar_Bench_Mid_Rows/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Straight_Raises_on_Incline_Bench",
    "name": "Straight Raises on Incline Bench",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Place a bar on the ground behind the head of an incline bench.\nLay on the bench face down. With a pronated grip, pick the barbell up from the floor, keeping your arms straight. Allow the bar to hang straight down. This will be your starting position.\nTo begin, raise the barbell out in front of your head while keeping your arms extended.\nReturn to the starting position.",
    "images": [
      "Straight_Raises_on_Incline_Bench/0.jpg",
      "Straight_Raises_on_Incline_Bench/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "traps"
    ]
  },
  {
    "id": "Sumo_Deadlift",
    "name": "Sumo Deadlift",
    "category": "powerlifting",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Begin with a bar loaded on the ground. Approach the bar so that the bar intersects the middle of the feet. The feet should be set very wide, near the collars. Bend at the hips to grip the bar. The arms should be directly below the shoulders, inside the legs, and you can use a pronated grip, a mixed grip, or hook grip. Relax the shoulders, which in effect lengthens your arms.\nTake a breath, and then lower your hips, looking forward with your head with your chest up. Drive through the floor, spreading your feet apart, with your weight on the back half of your feet. Extend through the hips and knees.\nAs the bar passes through the knees, lean back and drive the hips into the bar, pulling your shoulder blades together.\nReturn the weight to the ground by bending at the hips and controlling the weight on the way down.",
    "images": [
      "Sumo_Deadlift/0.jpg",
      "Sumo_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "adductors",
      "forearms",
      "glutes",
      "lower back",
      "middle back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Sumo_Deadlift_with_Bands",
    "name": "Sumo Deadlift with Bands",
    "category": "powerlifting",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "To deadlift with short bands, simply loop them over the bar before you start, and step into them to set up. Ensure that they under the back half of your foot, directly where you are driving into the floor.\nBegin with a bar loaded on the ground. Approach the bar so that the bar intersects the middle of the feet. The feet should be set very wide, near the collars. Bend at the hips to grip the bar. The arms should be directly below the shoulders, inside the legs, and you can use a pronated grip, a mixed grip, or hook grip.\nTake a breath, and then lower your hips, looking forward with your head with your chest up. Drive through the floor, spreading your feet apart, with your weight on the back half of your feet. Extend through the hips and knees.\nAs the bar passes through the knees, lean back and drive the hips into the bar, pulling your shoulder blades together.\nReturn the weight to the ground by bending at the hips and controlling the weight on the way down.",
    "images": [
      "Sumo_Deadlift_with_Bands/0.jpg",
      "Sumo_Deadlift_with_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "adductors",
      "forearms",
      "glutes",
      "lower back",
      "middle back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Sumo_Deadlift_with_Chains",
    "name": "Sumo Deadlift with Chains",
    "category": "powerlifting",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "You can attach the chains to the sleeves of the bar, or just drape the middle over the bar so there is a greater weight increase as you lift. Attempt to keep the ends of the chains away from the plates so you don't hit them when you lower the weight.\nBegin with a bar loaded on the ground. Approach the bar so that the bar intersects the middle of the feet. The feet should be set very wide, near the collars. Bend at the hips to grip the bar. The arms should be directly below the shoulders, inside the legs, and you can use a pronated grip, a mixed grip, or hook grip. Relax the shoulders, which in effect lengthens your arms.\nTake a breath, and then lower your hips, looking forward with your head with your chest up. Drive through the floor, spreading your feet apart, with your weight on the back half of your feet. Extend through the hips and knees.\nAs the bar passes through the knees, lean back and drive the hips into the bar, pulling your shoulder blades together.\nReturn the weight to the ground by bending at the hips and controlling the weight on the way down.",
    "images": [
      "Sumo_Deadlift_with_Chains/0.jpg",
      "Sumo_Deadlift_with_Chains/1.jpg"
    ],
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "abductors",
      "adductors",
      "forearms",
      "glutes",
      "lower back",
      "middle back",
      "quadriceps",
      "traps"
    ]
  },
  {
    "id": "Suspended_Fallout",
    "name": "Suspended Fallout",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Adjust the straps so the handles are at an appropriate height, below waist level.\nBegin standing and grasping the handles. Lean into the straps, moving to an incline push-up position. This will be your starting position.\nKeeping your arms straight, lean further into the suspension straps, bringing your body closer to the ground, allowing your shoulders to extend, raising your arms up and over your head.\nMaintain a neutral spine and keep the rest of your body straight, your shoulders being the only joints allowed to move.\nPause during the peak contraction, and then return to the starting position.",
    "images": [
      "Suspended_Fallout/0.jpg",
      "Suspended_Fallout/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": [
      "chest",
      "lower back",
      "shoulders"
    ]
  },
  {
    "id": "Suspended_Push-Up",
    "name": "Suspended Push-Up",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Anchor your suspension straps securely to the top of a rack or other object.\nLeaning into the straps, take a handle in each hand and move into a push-up plank position. You should be as close to parallel to the ground as you can manage with your arms fully extended, maintaining good posture.\nMaintaining a straight, rigid torso, descend slowly by allowing the elbows to flex.\nContinue until your elbows break 90 degrees, pausing before you extend to return to the starting position.",
    "images": [
      "Suspended_Push-Up/0.jpg",
      "Suspended_Push-Up/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Suspended_Reverse_Crunch",
    "name": "Suspended Reverse Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Secure a set of suspension straps with the handles hanging about a foot off of the ground. Move yourself into a pushup plank position facing away from the rack.\nPlace your feet into the handles. You should maintain a straight posture, not allowing the hips to sag. This will be your starting position.\nBegin the movement by flexing the knees and hips, drawing the knees to your torso. As you do so, anteriorly tilt your pelvis, allowing your spine to flex.\nAt the top of the controlled motion, return to the starting position.",
    "images": [
      "Suspended_Reverse_Crunch/0.jpg",
      "Suspended_Reverse_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Suspended_Row",
    "name": "Suspended Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Suspend your straps at around chest height. Take a handle in each hand and lean back. Keep your body erect and your head and chest up. Your arms should be fully extended. This will be your starting position.\nBegin by flexing the elbow to initiate the movement. Protract your shoulder blades as you do so.\nAt the completion of the motion pause, and then return to the starting position.",
    "images": [
      "Suspended_Row/0.jpg",
      "Suspended_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Suspended_Split_Squat",
    "name": "Suspended Split Squat",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Suspend your straps so the handles are 18-30 inches from the floor.\nFacing away from the setup, place your rear foot into the handle behind you. Keep your head looking forward and your chest up, with your knee slightly bent. This will be your starting position.\nDescend by flexing the knee and hips, lowering yourself to the ground. Keep your weight on the heel of your foot and maintain your posture throughout the exercise.\nAt the bottom of the movement, reverse the motion, extending through the hip and knee to return to the starting position.",
    "images": [
      "Suspended_Split_Squat/0.jpg",
      "Suspended_Split_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "abductors",
      "adductors",
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Svend_Press",
    "name": "Svend Press",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Begin in a standing position.\nPress two lightweight plates together with your hands. Hold the plates together close to your chest to create an isometric contraction in your chest muscles. Your fingers should be pointed forward. This is your starting position.\nSqueeze the plates between your palms and extend your arms directly out in front of you in a controlled motion.\nPause at the top of the motion, and then slowly return to the starting position.",
    "images": [
      "Svend_Press/0.jpg",
      "Svend_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "forearms",
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "T-Bar_Row_with_Handle",
    "name": "T-Bar Row with Handle",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end.\nStand over the bar, and position a Double D row handle around the bar next to the collar. Using your hips and legs, rise to a standing position.\nAssume a wide stance with your hips back and your chest up. Your arms should be extended. This will be your starting position.\nPull the weight to your upper abdomen by retracting the shoulder blades and flexing the elbows. Do not jerk the weight or cheat during the movement.\nAfter a brief pause, return to the starting position.",
    "images": [
      "T-Bar_Row_with_Handle/0.jpg",
      "T-Bar_Row_with_Handle/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Tate_Press",
    "name": "Tate Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Lie down on a flat bench with a dumbbell in each hand on top of your thighs. The palms of your hand will be facing each other.\nBy using your thighs to help you get the dumbbells up, clean the dumbbells one arm at a time so that you can hold them in front of you at shoulder width. Note: when holding the dumbbells in front of you, make sure your arms are wider than shoulder width apart from each other using a pronated (palms forward) grip. Allow your elbows to point out. This is your starting position.\nKeeping the upper arms stationary, slowly move the dumbbells in and down in a semi circular motion until they touch the upper chest while inhaling. Keep full control of the dumbbells at all times and do not move the upper arms nor rest the dumbbells on the chest.\nAs you breathe out, move the dumbbells up using your triceps and the same semi-circular motion but in reverse. Attempt to keep the dumbbells together as they move up. Lock your arms in the contracted position, hold for a second and then start coming down again slowly again. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions of your training program.",
    "images": [
      "Tate_Press/0.jpg",
      "Tate_Press/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Thigh_Abductor",
    "name": "Thigh Abductor",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "To begin, sit down on the abductor machine and select a weight you are comfortable with. When your legs are positioned properly, grip the handles on each side. Your entire upper body (from the waist up) should be stationary. This is the starting position.\nSlowly press against the machine with your legs to move them away from each other while exhaling.\nFeel the contraction for a second and begin to move your legs back to the starting position while breathing in. Note: Remember to keep your upper body stationary to prevent any injuries from occurring.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Thigh_Abductor/0.jpg",
      "Thigh_Abductor/1.jpg"
    ],
    "primaryMuscles": [
      "abductors"
    ],
    "secondaryMuscles": [
      "glutes"
    ]
  },
  {
    "id": "Thigh_Adductor",
    "name": "Thigh Adductor",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "machine",
    "instructions": "To begin, sit down on the adductor machine and select a weight you are comfortable with. When your legs are positioned properly on the leg pads of the machine, grip the handles on each side. Your entire upper body (from the waist up) should be stationary. This is the starting position.\nSlowly press against the machine with your legs to move them towards each other while exhaling.\nFeel the contraction for a second and begin to move your legs back to the starting position while breathing in. Note: Remember to keep your upper body stationary and avoid fast jerking motions in order to prevent any injuries from occurring.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Thigh_Adductor/0.jpg",
      "Thigh_Adductor/1.jpg"
    ],
    "primaryMuscles": [
      "adductors"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Trail_Running_Walking",
    "name": "Trail Running/Walking",
    "category": "cardio",
    "force": null,
    "level": "beginner",
    "mechanic": null,
    "equipment": null,
    "instructions": "Running or hiking on trails will get the blood pumping and heart beating almost immediately. Make sure you have good shoes. While you use the muscles in your calves and buttocks to pull yourself up a hill, the knees, joints and ankles absorb the bulk of the pounding coming back down. Take smaller steps as you walk downhill, keep your knees bent to reduce the impact and slow down to avoid falling.\nA 150 lb person can burn over 200 calories for 30 minutes walking uphill, compared to 175 on a flat surface. If running the trail, a 150 lb person can burn well over 500 calories in 30 minutes.",
    "images": [
      "Trail_Running_Walking/0.jpg",
      "Trail_Running_Walking/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Trap_Bar_Deadlift",
    "name": "Trap Bar Deadlift",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "For this exercise load a trap bar, also known as a hex bar, to an appropriate weight resting on the ground. Stand in the center of the apparatus and grasp both handles.\nLower your hips, look forward with your head and keep your chest up.\nBegin the movement by driving through the heels and extend your hips and knees. Avoid rounding your back at all times.\nAt the completion of the movement, lower the weight back to the ground under control.",
    "images": [
      "Trap_Bar_Deadlift/0.jpg",
      "Trap_Bar_Deadlift/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Tricep_Dumbbell_Kickback",
    "name": "Tricep Dumbbell Kickback",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Start with a dumbbell in each hand and your palms facing your torso. Keep your back straight with a slight bend in the knees and bend forward at the waist. Your torso should be almost parallel to the floor. Make sure to keep your head up. Your upper arms should be close to your torso and parallel to the floor. Your forearms should be pointed towards the floor as you hold the weights. There should be a 90-degree angle formed between your forearm and upper arm. This is your starting position.\nNow, while keeping your upper arms stationary, exhale and use your triceps to lift the weights until the arm is fully extended. Focus on moving the forearm.\nAfter a brief pause at the top contraction, inhale and slowly lower the dumbbells back down to the starting position.\nRepeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Tricep_Dumbbell_Kickback/0.jpg",
      "Tricep_Dumbbell_Kickback/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Triceps_Overhead_Extension_with_Rope",
    "name": "Triceps Overhead Extension with Rope",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Attach a rope to a low pulley. After selecting an appropriate weight, grasp the rope with both hands and face away from the cable.\nPosition your hands behind your head with your elbows point straight up. Your elbows should start out flexed, and you can stagger your stance and lean gently away from the machine to create greater stability. This will be your starting position.\nTo perform the movement, extend through the elbow while keeping the upper arm in position, raising your hands above your head.\nSqueeze your triceps at the top of the movement, and slowly lower the weight back to the start position.",
    "images": [
      "Triceps_Overhead_Extension_with_Rope/0.jpg",
      "Triceps_Overhead_Extension_with_Rope/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Triceps_Pushdown",
    "name": "Triceps Pushdown",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Attach a straight or angled bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width.\nStanding upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. This is your starting position.\nUsing the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement.\nAfter a second hold at the contracted position, bring the bar slowly up to the starting point. Breathe in as you perform this step.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Triceps_Pushdown/0.jpg",
      "Triceps_Pushdown/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Triceps_Pushdown_-_Rope_Attachment",
    "name": "Triceps Pushdown - Rope Attachment",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Attach a rope attachment to a high pulley and grab with a neutral grip (palms facing each other).\nStanding upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the rope with the palms facing each other. This is your starting position.\nUsing the triceps, bring the rope down as you bring each side of the rope to the side of your thighs. At the end of the movement the arms are fully extended and perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement.\nAfter holding for a second, at the contracted position, bring the rope slowly up to the starting point. Breathe in as you perform this step.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Triceps_Pushdown_-_Rope_Attachment/0.jpg",
      "Triceps_Pushdown_-_Rope_Attachment/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Triceps_Pushdown_-_V-Bar_Attachment",
    "name": "Triceps Pushdown - V-Bar Attachment",
    "category": "strength",
    "force": "push",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "cable",
    "instructions": "Attach a V-Bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width.\nStanding upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. The thumbs should be higher than the small finger. This is your starting position.\nUsing the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement.\nAfter a second hold at the contracted position, bring the V-Bar slowly up to the starting point. Breathe in as you perform this step.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Triceps_Pushdown_-_V-Bar_Attachment/0.jpg",
      "Triceps_Pushdown_-_V-Bar_Attachment/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Tuck_Crunch",
    "name": "Tuck Crunch",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "body only",
    "instructions": "To begin, lie down on the floor or an exercise mat with your back pressed against the floor. Your arms should be lying across your sides with the palms facing down.\nYour legs should be crossed by wrapping one ankle around the other. Slowly elevate your legs up in the air until your thighs are perpendicular to the floor with a slight bend at the knees. Note: Your knees and toes should be parallel to the floor as opposed to the thighs.\nMove your arms from the floor and cross them so they are resting on your chest. This is the starting position.\nWhile keeping your lower back pressed against the floor, slowly lift your torso. Remember to exhale while perform this part of the exercise.\nSlowly begin to lower your torso back down to the starting position while inhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Tuck_Crunch/0.jpg",
      "Tuck_Crunch/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Two-Arm_Dumbbell_Preacher_Curl",
    "name": "Two-Arm Dumbbell Preacher Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Grab a dumbbell with each arm and place the upper arms on top of the preacher bench or the incline bench. The dumbbell should be held at shoulder length. This will be your starting position.\nAs you breathe in, slowly lower the dumbbells until your upper arm is extended and the biceps is fully stretched.\nAs you exhale, use the biceps to curl the weights up until your biceps is fully contracted and the dumbbells are at shoulder height.\nSqueeze the biceps hard for a second at the contracted position and repeat for the recommended amount of repetitions.",
    "images": [
      "Two-Arm_Dumbbell_Preacher_Curl/0.jpg",
      "Two-Arm_Dumbbell_Preacher_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Two-Arm_Kettlebell_Clean",
    "name": "Two-Arm Kettlebell Clean",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place two kettlebells between your feet. To get in the starting position, push your butt back and look straight ahead.\nClean the kettlebells to your shoulders by extending through the legs and hips as you raise the kettlebells towards your shoulders. Rotate your wrists as you do so.\nLower the kettlebells back to the starting position and repeat.",
    "images": [
      "Two-Arm_Kettlebell_Clean/0.jpg",
      "Two-Arm_Kettlebell_Clean/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back",
      "traps"
    ]
  },
  {
    "id": "Two-Arm_Kettlebell_Jerk",
    "name": "Two-Arm Kettlebell Jerk",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you swing the kettlebells towards your shoulders. Rotate your wrists as you do so, so that the palms face forward. Squat down a few inches and reverse the motion rapidly driving both kettlebells overhead. Immediately after the initial push, squat down again and get under the kettlebells. Once the kettlebells are locked out, stand upright to complete the exercise.",
    "images": [
      "Two-Arm_Kettlebell_Jerk/0.jpg",
      "Two-Arm_Kettlebell_Jerk/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "calves",
      "quadriceps",
      "triceps"
    ]
  },
  {
    "id": "Two-Arm_Kettlebell_Military_Press",
    "name": "Two-Arm Kettlebell Military Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you swing the kettlebells towards your shoulders. Rotate your wrists as you do so, so that the palms face forward.\nPress the kettlebells up and out. As the kettlebells pass your head, lean into the weights so that the kettlebells are racked behind your head. Make sure to contract your lats, butt, and stomach for added stability.",
    "images": [
      "Two-Arm_Kettlebell_Military_Press/0.jpg",
      "Two-Arm_Kettlebell_Military_Press/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ]
  },
  {
    "id": "Two-Arm_Kettlebell_Row",
    "name": "Two-Arm Kettlebell Row",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "kettlebells",
    "instructions": "Place two kettlebells in front of your feet. Bend your knees slightly and then push your butt out as much as possible as you bend over to get in the starting position.\nGrab both kettlebells and pull them to your stomach, retracting your shoulder blades and flexing the elbows. Keep your back straight. Lower and repeat.",
    "images": [
      "Two-Arm_Kettlebell_Row/0.jpg",
      "Two-Arm_Kettlebell_Row/1.jpg"
    ],
    "primaryMuscles": [
      "middle back"
    ],
    "secondaryMuscles": [
      "biceps",
      "lats"
    ]
  },
  {
    "id": "Underhand_Cable_Pulldowns",
    "name": "Underhand Cable Pulldowns",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Sit down on a pull-down machine with a wide bar attached to the top pulley. Adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.\nGrab the pull-down bar with the palms facing your torso (a supinated grip). Make sure that the hands are placed closer than the shoulder width.\nAs you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.\nAs you breathe out, pull the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the fully contracted position and keep the elbows close to your body. The upper torso should remain stationary as your bring the bar to you and only the arms should move. The forearms should do no other work other than hold the bar.\nAfter a second on the contracted position, while breathing in, slowly bring the bar back to the starting position when your arms are fully extended and the lats are fully stretched.\nRepeat this motion for the prescribed amount of repetitions.",
    "images": [
      "Underhand_Cable_Pulldowns/0.jpg",
      "Underhand_Cable_Pulldowns/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Upright_Barbell_Row",
    "name": "Upright Barbell Row",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Grasp a barbell with an overhand grip that is slightly less than shoulder width. The bar should be resting on the top of your thighs with your arms extended and a slight bend in your elbows. Your back should also be straight. This will be your starting position.\nNow exhale and use the sides of your shoulders to lift the bar, raising your elbows up and to the side. Keep the bar close to your body as you raise it. Continue to lift the bar until it nearly touches your chin. Tip: Your elbows should drive the motion, and should always be higher than your forearms. Remember to keep your torso stationary and pause for a second at the top of the movement.\nLower the bar back down slowly to the starting position. Inhale as you perform this portion of the movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Upright_Barbell_Row/0.jpg",
      "Upright_Barbell_Row/1.jpg"
    ],
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "traps"
    ]
  },
  {
    "id": "Upright_Cable_Row",
    "name": "Upright Cable Row",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Grasp a straight bar cable attachment that is attached to a low pulley with a pronated (palms facing your thighs) grip that is slightly less than shoulder width. The bar should be resting on top of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position.\nUse your side shoulders to lift the cable bar as you exhale. The bar should be close to the body as you move it up. Continue to lift it until it nearly touches your chin. Tip: Your elbows should drive the motion. As you lift the bar, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement.\nLower the bar back down slowly to the starting position. Inhale as you perform this portion of the movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Upright_Cable_Row/0.jpg",
      "Upright_Cable_Row/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Upright_Row_-_With_Bands",
    "name": "Upright Row - With Bands",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "bands",
    "instructions": "To begin, stand on an exercise band so that tension begins at arm's length. Grasp the handles using a pronated (palms facing your thighs) grip that is slightly less than shoulder width. The handles should be resting on top of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position.\nUse your side shoulders to lift the handles as you exhale. The handles should be close to the body as you move them up. Continue to lift the handles until they nearly touches your chin. Tip: Your elbows should drive the motion. As you lift the handles, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement.\nLower the handles back down slowly to the starting position. Inhale as you perform this portion of the movement.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Upright_Row_-_With_Bands/0.jpg",
      "Upright_Row_-_With_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "traps"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "V-Bar_Pulldown",
    "name": "V-Bar Pulldown",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Sit down on a pull-down machine with a V-Bar attached to the top pulley.\nAdjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.\nGrab the V-bar with the palms facing each other (a neutral grip). Stick your chest out and lean yourself back slightly (around 30-degrees) in order to better engage the lats. This will be your starting position.\nUsing your lats, pull the bar down as you squeeze your shoulder blades. Continue until your chest nearly touches the V-bar. Exhale as you execute this motion. Tip: Keep the torso stationary throughout the movement.\nAfter a second hold on the contracted position, slowly bring the bar back to the starting position as you breathe in.\nRepeat for the prescribed number of repetitions.",
    "images": [
      "V-Bar_Pulldown/0.jpg",
      "V-Bar_Pulldown/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "V-Bar_Pullup",
    "name": "V-Bar Pullup",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Start by placing the middle of the V-bar in the middle of the pull-up bar (assuming that the pull-up station you are using does not have neutral grip handles). The V-Bar handles will be facing down so that you can hang from the pull-up bar through the use of the handles.\nOnce you securely place the V-bar, take a hold of the bar from each side and hang from it. Stick your chest out and lean yourself back slightly in order to better engage the lats. This will be your starting position.\nUsing your lats, pull your torso up while leaning your head back slightly so that you do not hit yourself with the chin-up bar. Continue until your chest nearly touches the V-bar. Exhale as you execute this motion.\nAfter a second hold on the contracted position, slowly lower your body back to the starting position as you breathe in.\nRepeat for the prescribed number of repetitions.",
    "images": [
      "V-Bar_Pullup/0.jpg",
      "V-Bar_Pullup/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Walking_Treadmill",
    "name": "Walking, Treadmill",
    "category": "cardio",
    "force": null,
    "level": "beginner",
    "mechanic": null,
    "equipment": "machine",
    "instructions": "To begin, step onto the treadmill and select the desired option from the menu. Most treadmills have a manual setting, or you can select a program to run. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. Elevation can be adjusted to change the intensity of the workout.\nTreadmills offer convenience, cardiovascular benefits, and usually have less impact than walking outside. When walking, you should move at a moderate to fast pace, not a leisurely one. Being an activity of lower intensity, walking doesn't burn as many calories as some other activities, but still provides great benefit. A 150 lb person will burn about 175 calories walking 4 miles per hour for 30 minutes, compared to 450 calories running twice as fast. Maintain proper posture as you walk, and only hold onto the handles when necessary, such as when dismounting or checking your heart rate.",
    "images": [
      "Walking_Treadmill/0.jpg",
      "Walking_Treadmill/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Weighted_Ball_Hyperextension",
    "name": "Weighted Ball Hyperextension",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "exercise ball",
    "instructions": "To begin, lie down on an exercise ball with your torso pressing against the ball and parallel to the floor. The ball of your feet should be pressed against the floor to help keep you balanced. Place a weighted plate under your chin or behind your neck. This is the starting position.\nSlowly raise your torso up by bending at the waist and lower back. Remember to exhale during this movement.\nHold the contraction on your lower back for a second and lower your torso back down to the starting position while inhaling.\nRepeat for the recommended amount of repetitions prescribed in your program.",
    "images": [
      "Weighted_Ball_Hyperextension/0.jpg",
      "Weighted_Ball_Hyperextension/1.jpg"
    ],
    "primaryMuscles": [
      "lower back"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings",
      "middle back"
    ]
  },
  {
    "id": "Weighted_Ball_Side_Bend",
    "name": "Weighted Ball Side Bend",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "exercise ball",
    "instructions": "To begin, lie down on an exercise ball with your left side of the torso (waist, hips and shoulder) pressed against the ball.\nYour feet should be on the floor while your legs are crossed and hanging from the ball. Hold a weighted plate with your right hand directly to the right side of your head. Tip: Make sure the smooth side of the plate is resting against your head.\nPlace your left arm across your torso so that your palm is on your obliques. There should be a right angle between your left forearm and upper arm. This is the starting position.\nRaise the side of your torso up by laterally flexing at the waist while exhaling.\nHold the contraction for a second and slowly lower yourself back down to the starting position while inhaling.\nRepeat for the recommended amount of repetitions.\nSwitch sides and repeat the exercise.",
    "images": [
      "Weighted_Ball_Side_Bend/0.jpg",
      "Weighted_Ball_Side_Bend/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Weighted_Bench_Dip",
    "name": "Weighted Bench Dip",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "For this exercise you will need to place a bench behind your back and another one in front of you. With the benches perpendicular to your body, hold on to one bench on its edge with the hands close to your body, separated at shoulder width. Your arms should be fully extended.\nThe legs will be extended forward on top of the other bench. Your legs should be parallel to the floor while your torso is to be perpendicular to the floor. Have your partner place the dumbbell on your lap. Note: This exercise is best performed with a partner as placing the weight on your lap can be challenging and cause injury without assistance. This will be your starting position.\nSlowly lower your body as you inhale by bending at the elbows until you lower yourself far enough to where there is an angle slightly smaller than 90 degrees between the upper arm and the forearm. Tip: Keep the elbows as close as possible throughout the movement. Forearms should always be pointing down.\nUsing your triceps to bring your torso up again, lift yourself back to the starting position while exhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Weighted_Bench_Dip/0.jpg",
      "Weighted_Bench_Dip/1.jpg"
    ],
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ]
  },
  {
    "id": "Weighted_Crunches",
    "name": "Weighted Crunches",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "medicine ball",
    "instructions": "Lie flat on your back with your feet flat on the ground or resting on a bench with your knees bent at a 90 degree angle.\nHold a weight to your chest, or you may hold it extended above your torso. This will be your starting position.\nNow, exhale and slowly begin to roll your shoulders off the floor. Your shoulders should come up off the floor about 4 inches while your lower back remains on the floor.\nAt the top of the movement, flex your abdominals and hold for a brief pause.\nThen inhale and slowly lower yourself back down to the starting position.",
    "images": [
      "Weighted_Crunches/0.jpg",
      "Weighted_Crunches/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Weighted_Jump_Squat",
    "name": "Weighted Jump Squat",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Position a lightly loaded barbell across the back of your shoulders. You could also use a weighted vest, sandbag, or other type of resistance for this exercise.\nThe weight should be light enough that it doesn't slow you down significantly. Your feet should be just outside of shoulder width with your head and chest up. This will be your starting position.\nUsing a countermovement, squat partially down and immediately reverse your direction to explode off of the ground, extending through your hips, knees, and ankles. Maintain good posture throughout the jump.\nAs you return to the ground, absorb the impact through your legs.",
    "images": [
      "Weighted_Jump_Squat/0.jpg",
      "Weighted_Jump_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Weighted_Pull_Ups",
    "name": "Weighted Pull Ups",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Attach a weight to a dip belt and secure it around your waist. Grab the pull-up bar with the palms of your hands facing forward. For a medium grip, your hands should be spaced at shoulder width. Both arms should be extended in front of you holding the bar at the chosen grip.\nYou'll want to bring your torso back about 30 degrees while creating a curvature in your lower back and sticking your chest out. This will be your starting position.\nNow, exhale and pull your torso up until your head is above your hands. Concentrate on squeezing yourshoulder blades back and down as you reach the top contracted position.\nAfter a brief moment at the top contracted position, inhale and slowly lower your torso back to the starting position with your arms extended and your lats fully stretched.",
    "images": [
      "Weighted_Pull_Ups/0.jpg",
      "Weighted_Pull_Ups/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back"
    ]
  },
  {
    "id": "Weighted_Sissy_Squat",
    "name": "Weighted Sissy Squat",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Standing upright, with feet at shoulder width and toes raised, use one hand to hold onto the beams of a squat rack and the opposite arm to hold a plate on top of your chest. This is your starting position.\nAs you use one arm to hold yourself, bend at the knees and slowly lower your torso toward the ground by bringing your pelvis and knees forward. Inhale as you go down and stop when your upper and lower legs almost create a 90-degree angle. Hold the stretch position for a second.\nAfter your one second hold, use your thigh muscles to bring your torso back up to the starting position. Exhale as you move up.\nRepeat for the recommended amount of times.",
    "images": [
      "Weighted_Sissy_Squat/0.jpg",
      "Weighted_Sissy_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Weighted_Sit-Ups_-_With_Bands",
    "name": "Weighted Sit-Ups - With Bands",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "Start out by strapping the bands around the base of the decline bench. Place the handles towards the inside of the decline bench so that when lying down, you can reach for both of them.\nPosition your legs through the decline machine until they are secured. Now reach for the exercise bands with both hands. Use a pronated (palms forward) grip to grasp the handles. Position them near your collar bone and rotate your wrist to a neutral grip (palms facing the torso). Note: Your arms should remain stationary throughout the exercise. This is the starting position.\nMove your torso upward until your upper body is perpendicular to the floor while exhaling. Hold the contraction for a second and lower your upper body back down to the starting position while inhaling.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Weighted_Sit-Ups_-_With_Bands/0.jpg",
      "Weighted_Sit-Ups_-_With_Bands/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Weighted_Squat",
    "name": "Weighted Squat",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "other",
    "instructions": "Start by positioning two flat benches shoulder width apart from each other. Stand on top of them and wrap the weighted belt around your waist with the amount of weight you feel comfortable with. Make sure your toes are facing out.\nOnce you are standing straight up with the weight hanging in between your legs, position your arms so that they are fully extended to the side of your body. This is the starting position.\nBegin by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that are perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to move the body back up by pushing the floor of the flat bench with the ball of your foot mainly as you straighten the legs again and go back to the starting position. Exhale as you perform this portion of the exercise.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Weighted_Squat/0.jpg",
      "Weighted_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Wide-Grip_Barbell_Bench_Press",
    "name": "Wide-Grip Barbell Bench Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie back on a flat bench with feet firm on the floor. Using a wide, pronated (palms forward) grip that is around 3 inches away from shoulder width (for each hand), lift the bar from the rack and hold it straight over you with your arms locked. The bar will be perpendicular to the torso and the floor. This will be your starting position.\nAs you breathe in, come down slowly until you feel the bar on your middle chest.\nAfter a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Wide-Grip_Barbell_Bench_Press/0.jpg",
      "Wide-Grip_Barbell_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Wide-Grip_Decline_Barbell_Bench_Press",
    "name": "Wide-Grip Decline Barbell Bench Press",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie back on a decline bench with the feet securely locked at the front of the bench. Using a wide, pronated (palms forward) grip that is around 3 inches away from shoulder width (for each hand), lift the bar from the rack and hold it straight over you with your arms locked. The bar will be perpendicular to the torso and the floor. This will be your starting position.\nAs you breathe in, come down slowly until you feel the bar on your lower chest.\nAfter a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.\nRepeat the movement for the prescribed amount of repetitions.",
    "images": [
      "Wide-Grip_Decline_Barbell_Bench_Press/0.jpg",
      "Wide-Grip_Decline_Barbell_Bench_Press/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Wide-Grip_Decline_Barbell_Pullover",
    "name": "Wide-Grip Decline Barbell Pullover",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "Lie down on a decline bench with both legs securely locked in position. Reach for the barbell behind the head using a pronated grip (palms facing out). Make sure to grab the barbell wider than shoulder width apart for this exercise. Slowly lift the barbell up from the floor by using your arms.\nWhen positioned properly, your arms should be fully extended and perpendicular to the floor. This is the starting position.\nBegin by moving the barbell back down in a semicircular motion as if you were going to place it on the floor, but instead, stop when the arms are parallel to the floor. Tip: Keep the arms fully extended at all times. The movement should only happen at the shoulder joint. Inhale as you perform this portion of the movement.\nNow bring the barbell up while exhaling until you are back at the starting position. Remember to keep full control of the barbell at all times.\nRepeat the movement for the prescribed amount of repetitions of your training program.\nWhen finished with your set, slowly lower the barbell back down until it is level with your head and release it.",
    "images": [
      "Wide-Grip_Decline_Barbell_Pullover/0.jpg",
      "Wide-Grip_Decline_Barbell_Pullover/1.jpg"
    ],
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ]
  },
  {
    "id": "Wide-Grip_Lat_Pulldown",
    "name": "Wide-Grip Lat Pulldown",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Sit down on a pull-down machine with a wide bar attached to the top pulley. Make sure that you adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.\nGrab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width.\nAs you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.\nAs you breathe out, bring the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the bar; therefore do not try to pull down the bar using the forearms.\nAfter a second at the contracted position squeezing your shoulder blades together, slowly raise the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Inhale during this portion of the movement.\nRepeat this motion for the prescribed amount of repetitions.",
    "images": [
      "Wide-Grip_Lat_Pulldown/0.jpg",
      "Wide-Grip_Lat_Pulldown/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Wide-Grip_Pulldown_Behind_The_Neck",
    "name": "Wide-Grip Pulldown Behind The Neck",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "cable",
    "instructions": "Sit down on a pull-down machine with a wide bar attached to the top pulley. Make sure that you adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.\nGrab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width.\nAs you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso and head forward. Think of an imaginary line from the center of the bar down to the back of your neck. This is your starting position.\nAs you breathe out, bring the bar down until it touches the back of your neck by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the bar; therefore do not try to pull down the bar using the forearms.\nAfter a second on the contracted position squeezing your shoulder blades together, slowly raise the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Inhale during this portion of the movement.\nRepeat this motion for the prescribed amount of repetitions.",
    "images": [
      "Wide-Grip_Pulldown_Behind_The_Neck/0.jpg",
      "Wide-Grip_Pulldown_Behind_The_Neck/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Wide-Grip_Rear_Pull-Up",
    "name": "Wide-Grip Rear Pull-Up",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Grab the pull-up bar with the palms facing forward using a wide grip.\nAs you have both arms extended in front of you holding the bar, bring your torso forward and head so that there is an imaginary line from the pull-up bar to the back of your neck. This is your starting position.\nPull your torso up until the bar is near the back of your neck. To do this, draw the shoulders and upper arms down and back while slightly leaning your head forward. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar.\nAfter a second on the contracted position, start to inhale and slowly lower your torso back to the starting position when your arms are fully extended and the lats are fully stretched.\nRepeat this motion for the prescribed amount of repetitions.",
    "images": [
      "Wide-Grip_Rear_Pull-Up/0.jpg",
      "Wide-Grip_Rear_Pull-Up/1.jpg"
    ],
    "primaryMuscles": [
      "lats"
    ],
    "secondaryMuscles": [
      "biceps",
      "middle back",
      "shoulders"
    ]
  },
  {
    "id": "Wide-Grip_Standing_Barbell_Curl",
    "name": "Wide-Grip Standing Barbell Curl",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Stand up with your torso upright while holding a barbell at the wide outer handle. The palm of your hands should be facing forward. The elbows should be close to the torso. This will be your starting position.\nWhile holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move.\nContinue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard.\nSlowly begin to bring the bar back to starting position as your breathe in.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Wide-Grip_Standing_Barbell_Curl/0.jpg",
      "Wide-Grip_Standing_Barbell_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Wide_Stance_Barbell_Squat",
    "name": "Wide Stance Barbell Squat",
    "category": "strength",
    "force": "push",
    "level": "intermediate",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.\nHold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.\nStep away from the rack and position your legs using a wider-than-shoulder-width stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance, and also maintain a straight back. This will be your starting position.\nBegin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the bar as you exhale by pushing the floor with the heel of your foot as you straighten the legs again and go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Wide_Stance_Barbell_Squat/0.jpg",
      "Wide_Stance_Barbell_Squat/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "lower back"
    ]
  },
  {
    "id": "Wind_Sprints",
    "name": "Wind Sprints",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "compound",
    "equipment": "body only",
    "instructions": "Hang from a pull-up bar using a pronated grip. Your arms and legs should be extended. This will be your starting position.\nBegin by quickly raising one knee as high as you can. Do not swing your body or your legs. 3\nImmediately reverse the motion, returning that leg to the starting position. Simultaneously raise the opposite knee as high as possible.\nContinue alternating between legs until the set is complete.",
    "images": [
      "Wind_Sprints/0.jpg",
      "Wind_Sprints/1.jpg"
    ],
    "primaryMuscles": [
      "abdominals"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Wrist_Roller",
    "name": "Wrist Roller",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "other",
    "instructions": "To begin, stand straight up grabbing a wrist roller using a pronated grip (palms facing down). Your feet should be shoulder width apart.\nSlowly lift both arms until they are fully extended and parallel to the floor in front of you. Note: Make sure the rope is not wrapped around the roller. Your entire body should be stationary except for the forearms. This is the starting position.\nRotate one wrist at a time in an upward motion to bring the weight up to the bar by rolling the rope around the roller.\nOnce the weight has reached the bar, slowly begin to lower the weight back down by rotating the wrist in a downward motion until the weight reaches the starting position.\nRepeat for the prescribed amount of repetitions in your program.",
    "images": [
      "Wrist_Roller/0.jpg",
      "Wrist_Roller/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": [
      "shoulders"
    ]
  },
  {
    "id": "Wrist_Rotations_with_Straight_Bar",
    "name": "Wrist Rotations with Straight Bar",
    "category": "strength",
    "force": "pull",
    "level": "beginner",
    "mechanic": "isolation",
    "equipment": "barbell",
    "instructions": "Hold a barbell with both hands and your palms facing down; hands spaced about shoulder width. This will be your starting position.\nAlternating between each of your hands, perform the movement by extending the wrist as though you were rolling up a newspaper. Continue alternating back and forth until failure.\nReverse the motion by flexing the wrist, rolling the opposite direction. Continue the alternating motion until failure.",
    "images": [
      "Wrist_Rotations_with_Straight_Bar/0.jpg",
      "Wrist_Rotations_with_Straight_Bar/1.jpg"
    ],
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": []
  },
  {
    "id": "Zercher_Squats",
    "name": "Zercher Squats",
    "category": "strength",
    "force": "push",
    "level": "expert",
    "mechanic": "compound",
    "equipment": "barbell",
    "instructions": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. The correct height should be anywhere above the waist but below the chest. Once the correct height is chosen and the bar is loaded, lock your hands together and place the bar on top of your arms in between the forearm and upper arm.\nLift the bar up so that it is resting on top of your forearms. If you are holding the bar properly, it should look as if you have your arms crossed but with a bar running across them.\nStep away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section).\nBegin to lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.\nBegin to raise the bar as you exhale by pushing the floor with the ball of your foot mainly as you straighten the legs again and go back to the starting position.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Zercher_Squats/0.jpg",
      "Zercher_Squats/1.jpg"
    ],
    "primaryMuscles": [
      "quadriceps"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ]
  },
  {
    "id": "Zottman_Curl",
    "name": "Zottman Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Stand up with your torso upright and a dumbbell in each hand being held at arms length. The elbows should be close to the torso.\nMake sure the palms of the hands are facing each other. This will be your starting position.\nWhile holding the upper arm stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Your wrist should rotate so that you have a supinated (palms up) grip. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a second as you squeeze the biceps.\nNow during the contracted position, rotate your wrist until you now have a pronated (palms facing down) grip with the thumb at a higher position than the pinky.\nSlowly begin to bring the dumbbells back down using the pronated grip.\nAs the dumbbells close your thighs, start rotating the wrist so that you go back to a neutral (palms facing your body) grip.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Zottman_Curl/0.jpg",
      "Zottman_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  },
  {
    "id": "Zottman_Preacher_Curl",
    "name": "Zottman Preacher Curl",
    "category": "strength",
    "force": "pull",
    "level": "intermediate",
    "mechanic": "isolation",
    "equipment": "dumbbell",
    "instructions": "Grab a dumbbell in each hand and place your upper arms on top of the preacher bench or the incline bench. The dumbbells should be held at shoulder height and the elbows should be flexed. Hold the dumbbells with the palms of your hands facing down. This will be your starting position.\nAs you breathe in, slowly lower the dumbbells keeping the palms down until your upper arm is extended and your biceps are fully stretched.\nNow rotate your wrists once you are at the bottom of the movement so that the palms of the hands are facing up.\nAs you exhale, use your biceps to curl the weights up until they are fully contracted and the dumbbells are at shoulder height. Again, remember that to ensure full contraction you need to bring that small finger higher than the thumb.\nSqueeze the biceps hard for a second at the contracted position and rotate your wrists so that the palms are facing down again.\nRepeat for the recommended amount of repetitions.",
    "images": [
      "Zottman_Preacher_Curl/0.jpg",
      "Zottman_Preacher_Curl/1.jpg"
    ],
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ]
  }
];

// 유틸: id로 단건 조회
export const getExerciseById = (id) =>
  EXERCISES.find((ex) => ex.id === id) ?? null;

// 유틸: 근육 그룹으로 필터
export const getExercisesByMuscle = (muscleId) =>
  EXERCISES.filter(
    (ex) =>
      ex.primaryMuscles.includes(muscleId) ||
      ex.secondaryMuscles.includes(muscleId)
  );

// 유틸: 카테고리로 필터 (strength | cardio | stretching ...)
export const getExercisesByCategory = (category) =>
  EXERCISES.filter((ex) => ex.category === category);

// 유틸: 레벨로 필터 (beginner | intermediate | expert)
export const getExercisesByLevel = (level) =>
  EXERCISES.filter((ex) => ex.level === level);

// 유틸: 이름 검색
export const searchExercises = (query) => {
  const q = query.toLowerCase();
  return EXERCISES.filter((ex) => ex.name.toLowerCase().includes(q));
};
