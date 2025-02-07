
  var jsPsych = initJsPsych({
    default_iti: 250,
    on_finish: function() {
      jsPsych.data.displayData();
    }
  });
  var timeline = [];

  var instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'Do you want to do this experiment?',
    choices: ['Yes','No'],
  };

  timeline.push(instructions);

  var judgement_trial = {
    type: jsPsychHtmlSliderResponse,
    stimulus: jsPsych.timelineVariable('sentence'),
    data: { sentence_type: jsPsych.timelineVariable('sentence_type'),
            expected: jsPsych.timelineVariable('expected')
    },
    labels: ['1','2','3', '4','5'],
    slider_width: 200,
    require_movement: true,
    prompt: '<p>How good is this sentence?</p>'
  };

  var judgement_task = {
     timeline: [judgement_trial],
     timeline_variables: stimuli,
     randomize_order: true,
   };

   timeline.push(judgement_task);
   jsPsych.run(timeline);
  