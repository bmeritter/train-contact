package com.contact.module;

import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

public class PhoneContact extends ReactContextBaseJavaModule {

    public PhoneContact(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PhoneContact";
    }

    @ReactMethod
    public void show(Promise promise) {
//        Toast.makeText(getReactApplicationContext(), "123", Toast.LENGTH_LONG).show();

        Context context = getReactApplicationContext();
        ContentResolver contentResolver = context.getContentResolver();
        Cursor cursor = contentResolver.query(android.provider.ContactsContract.Contacts.CONTENT_URI, null, null, null, null);
        WritableArray array = Arguments.createArray();

        while (cursor.moveToNext()) {
            String phoneNumber = cursor.getString(cursor.getColumnIndex(android.provider.ContactsContract.Contacts._ID));
            String fullName = cursor.getString(cursor.getColumnIndex(android.provider.ContactsContract.Contacts.DISPLAY_NAME));

            WritableMap map = Arguments.createMap();
            map.putString("fullName", fullName);
            map.putString("phone", phoneNumber);
            array.pushMap(map);
        }

        promise.resolve(array);
    }

}