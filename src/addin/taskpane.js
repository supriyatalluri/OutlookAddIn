/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

'use strict';

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("run").onclick = run;
  }
});

export async function run() {
  var item = Office.context.mailbox.item;
  document.getElementById("recurrence").innerHTML = "<b>Subject:</b> <br/>" + item.subject;
}