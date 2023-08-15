import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

function Tab5Screen() {
    return (
        <View style={styles.container}>
            <View style={styles.supportSection}>
                <TouchableOpacity style={styles.supportButton}>
                    <Text style={styles.supportButtonText}>Support</Text>
                </TouchableOpacity>
                <Text style={styles.disclaimerText}>Legal Disclaimer: The ride-share application provided here is for demonstration and educational purposes only. By accessing or using this application, you agree to be bound by the terms and conditions of this disclaimer. The developers and contributors of this application are not liable for any damages, injuries, or losses that may occur while using the application. Users of the application should exercise caution and good judgment while using the services.

                    This application may collect and store personal information and location data to facilitate ride-sharing services. By using this application, you consent to the collection, storage, and processing of your personal data as described in the application's privacy policy.

                    The developers make no warranties or representations regarding the accuracy, reliability, or completeness of the information and materials provided by the application. The application is provided on an "as-is" and "as-available" basis, without any express or implied warranties of any kind.

                    The developers and contributors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of the use or inability to use the application, including but not limited to any damages for errors, inaccuracies, omissions, or other defects in the application or its content.

                    The developers reserve the right to modify, suspend, or discontinue the application at any time without prior notice. They may also impose limitations on certain features and services or restrict access to parts or all of the application without liability or obligation.

                    You agree to indemnify, defend, and hold harmless the developers and contributors from and against any and all claims, liabilities, damages, losses, costs, and expenses, including reasonable attorneys' fees, arising from your use of the application, your violation of any term of this disclaimer, or your infringement of any third party's rights.

                    The application may contain links to third-party websites or services that are not owned or controlled by the developers. The developers do not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that the developers shall not be liable for any damages or losses incurred or alleged to be caused by the use of any third-party websites or services.

                    By using this application, you agree to comply with all applicable laws, regulations, and ordinances. You also agree not to use the application for any unlawful or prohibited purpose.

                    This disclaimer constitutes the entire agreement between you and the developers concerning the subject matter hereof and supersedes all prior or contemporaneous communications and proposals, whether oral or written, between you and the developers.

                    This disclaimer shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.

                    If any provision of this disclaimer is found to be invalid or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.

                    By using this application, you acknowledge that you have read, understood, and agreed to this legal disclaimer. If you do not agree to this disclaimer, you must not use the application.</Text>
            </View>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e90ff',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ADD8E6',
    },
    body: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: windowWidth * 0.05, // Use 5% of window's width as padding
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ADD8E6',
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
    bodyText: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
    },
    footerText: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
    supportSection: {
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: windowWidth * 0.1, // Use 10% of window's width as padding
    },
    supportButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    supportButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    disclaimerText: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
    },
});

export default Tab5Screen;
