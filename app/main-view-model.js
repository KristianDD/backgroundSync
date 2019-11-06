const Observable = require("tns-core-modules/data/observable").Observable;
const app = require("application");

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.counter = 2555;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {
        var serviceIntent = new android.content.Intent(this, com.tns.ForegroundService.class);
        serviceIntent.putExtra("inputExtra", "Foreground Service Example in Android");
        app.android.context.startForegroundService(serviceIntent);
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
