import 'package:crash_flutter_app/coffee_prefs.dart';
import 'package:crash_flutter_app/styled_body_text.dart';
import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text(
            'Coffee Card',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
          ),
          backgroundColor: Colors.brown[700],
          centerTitle: true,
        ),
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              color: Colors.brown[200],
              padding: const EdgeInsets.all(20),
              child: const StyledBodyText('How I like my coffee...'),
            ),
            Container(
              color: Colors.brown[100],
              padding: const EdgeInsets.all(20),
              child: const CoffeePrefs(),
            ),
            Expanded(
              child: Image.asset(
                'assets/img/coffee_bg.jpg',
                fit: BoxFit.fitWidth,
                alignment: Alignment.bottomCenter,
              ),
            )
          ],
        ));
    // return Container(
    //   color: Colors.orange,
    //   // width: 200,
    //   // height: 100,
    //   padding: const EdgeInsets.all(20),
    //   // margin: const EdgeInsets.only(left: 50),
    //   margin: const EdgeInsets.fromLTRB(10, 40, 0, 0),
    //   child: const Text('HELLO',
    //       style: TextStyle(
    //         fontSize: 18,
    //         letterSpacing: 4,
    //         decoration: TextDecoration.underline,
    //         fontStyle: FontStyle.italic,
    //       )),
    // );
  }
}


// container
// --wraps other widgets