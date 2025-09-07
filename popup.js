const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const jsonOutput = document.getElementById('json-output');

// Set initial message
jsonOutput.value = JSON.stringify({
  "message": "Fill out the form and click 'Generate Prompt' to see the JSON output here."
}, null, 2);

const subjectInput = document.getElementById('subject');
const actionInput = document.getElementById('action');
const settingInput = document.getElementById('setting');
const visualStyleSelect = document.getElementById('visual_style');
const cameraShotSelect = document.getElementById('camera_shot');
const lightingInput = document.getElementById('lighting');
const detailsTextarea = document.getElementById('details');

generateBtn.addEventListener('click', () => {
    const fullPrompt = [
        subjectInput.value,
        actionInput.value,
        settingInput.value ? `in ${settingInput.value}` : '',
        `shot with a ${cameraShotSelect.options[cameraShotSelect.selectedIndex].text.toLowerCase()}`,
        `using ${visualStyleSelect.options[visualStyleSelect.selectedIndex].text.toLowerCase()} style`,
        lightingInput.value ? `with ${lightingInput.value} lighting` : '',
        detailsTextarea.value || ''
    ].filter(Boolean).join(', ').replace(/,$/, '.').trim();

    const promptData = {
        prompt_summary: fullPrompt || "No description provided",
        parameters: {
            subject: subjectInput.value || null,
            action: actionInput.value || null,
            environment: {
               setting: settingInput.value || null,
               lighting: lightingInput.value || null,
            },
            style: {
                visual: visualStyleSelect.value,
                camera: {
                    shot_type: cameraShotSelect.value,
                },
            },
            additional_details: detailsTextarea.value || null,
        }
    };

    jsonOutput.value = JSON.stringify(promptData, null, 2);
});

copyBtn.addEventListener('click', () => {
    const textToCopy = jsonOutput.value;
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy to Clipboard';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text.');
    });
});