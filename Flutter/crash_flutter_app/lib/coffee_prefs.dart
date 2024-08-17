import 'package:crash_flutter_app/styled_body_text.dart';
import 'package:crash_flutter_app/styled_button.dart';
import 'package:flutter/material.dart';

class CoffeePrefs extends StatefulWidget {
  const CoffeePrefs({super.key});

  @override
  State<CoffeePrefs> createState() => _CoffeePrefsState();
}

class _CoffeePrefsState extends State<CoffeePrefs> {
  int strength = 1;
  int sugars = 1;

  void increaseStrength() {
    setState(() {
      strength = strength < 5 ? strength + 1 : 1;
    });
    // print('inc strength by 1');
  }

  void increaseSugars() {
    setState(() {
      sugars = sugars < 5 ? sugars + 1 : 0;
    });
    // print('inc sugars by 1');
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          children: [
            const StyledBodyText('Strength: '),
            // Text('$strength'),
            for (int i = 0; i < strength; i++)
              Image.asset(
                'assets/img/coffee_bean.png',
                width: 25,
                color: Colors.brown[100],
                colorBlendMode: BlendMode.multiply,
              ),
            const Expanded(
              child: SizedBox(
                  // width: 50,
                  ),
            ),
            StyledButton(onPressed: increaseStrength, child: const Text('+'))
          ],
        ),
        Row(
          children: [
            const StyledBodyText('Sugars: '),
            // Text('$sugars'),
            if (sugars == 0) const StyledBodyText('No sugars...'),
            for (int i = 0; i < sugars; i++)
              Image.asset(
                'assets/img/sugar_cube.png',
                width: 25,
                color: Colors.brown[100],
                colorBlendMode: BlendMode.multiply,
              ),
            const Expanded(
              child: SizedBox(
                  // width: 50,
                  ),
            ),
            StyledButton(onPressed: increaseSugars, child: const Text("+"))
          ],
        )
      ],
    );
  }
}
// class CoffeePrefs extends StatelessWidget {
//   const CoffeePrefs({super.key});

//   void increaseStrength() {
//     print('inc strength by 1');
//   }

//   void increaseSugars() {
//     print('inc sugars by 1');
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Column(
//       children: [
//         Row(
//           children: [
//             const Text('Strength: '),
//             const Text('3'),
//             Image.asset(
//               'assets/img/coffee_bean.png',
//               width: 25,
//               color: Colors.brown[100],
//               colorBlendMode: BlendMode.multiply,
//             ),
//             const Expanded(
//               child: SizedBox(
//                   // width: 50,
//                   ),
//             ),
//             FilledButton(
//                 style: FilledButton.styleFrom(
//                     backgroundColor: Colors.brown,
//                     foregroundColor: Colors.white),
//                 onPressed: increaseStrength,
//                 child: const Text('+'))
//           ],
//         ),
//         Row(
//           children: [
//             const Text('Sugars: '),
//             const Text('3'),
//             Image.asset(
//               'assets/img/sugar_cube.png',
//               width: 25,
//               color: Colors.brown[100],
//               colorBlendMode: BlendMode.multiply,
//             ),
//             const Expanded(
//               child: SizedBox(
//                   // width: 50,
//                   ),
//             ),
//             FilledButton(
//                 style: FilledButton.styleFrom(
//                     backgroundColor: Colors.brown,
//                     foregroundColor: Colors.white),
//                 onPressed: increaseSugars,
//                 child: const Text("+"))
//           ],
//         )
//       ],
//     );
//   }
// }
