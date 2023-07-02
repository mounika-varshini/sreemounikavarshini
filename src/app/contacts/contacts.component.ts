import { Component, OnInit } from '@angular/core';
import { googlemaps } from 'googlemaps';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {


  constructor(private toastService: ToastrService) {
  }


  ngOnInit(): void {
    function initMap(): void {
      let map: any = new google.maps.Map(document.getElementById("map")!, {
        center: new google.maps.LatLng(17.5225, 78.3856),
        zoom: 15,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#000" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#000" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          // {
          //   featureType: "administrative.locality",
          //   elementType: "labels.text.fill",
          //   stylers: [{ color: "#d59563" }],
          // },
          // {
          //   featureType: "poi",
          //   elementType: "labels.text.fill",
          //   stylers: [{ color: "#d59563" }],
          // },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
      });
      setMarkers(map);
    }


    const beaches: [string, number, number][] = [
      ["Nizampet Hyderabad", 17.5156, 78.3778],
    ];

    function setMarkers(map: google.maps.Map): void {
      // const image: google.maps.Icon = {
      //   url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      //   size: new google.maps.Size(20, 32),
      //   // The origin for this image is (0, 0).
      //   origin: new google.maps.Point(0, 0),
      //   // The anchor for this image is the base of the flagpole at (0, 32).
      //   anchor: new google.maps.Point(11, 40),
      // };
      const shape: google.maps.MarkerShape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: "poly",
      };

      const bounds = new google.maps.LatLngBounds();
      let marker: google.maps.Marker;
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(17.5156, 78.3778),
        map,
        icon: '',
        shape: shape,
        animation: google.maps.Animation.BOUNCE,
        // label: {
        //   text: 'Nizampet, Hyderabad',
        //   color: 'black',
        //   fontSize: '16px',
        //   fontWeight: 'bold',
        //   className: 'map-label'
        // },
        // zIndex: beach[3],
      });
      marker.setMap(map);
      bounds.extend(marker.getPosition() as google.maps.LatLng);
      map.fitBounds(bounds);

      const listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(12);
        google.maps.event.removeListener(listener);
      });
    }
    initMap();




  }

  onSubmit() {
    var frm = document.getElementsByName('contact-form')[0] as HTMLFormElement;
    if (frm.checkValidity()) {
      frm.submit(); // Submit the form
      frm.reset();  // Reset all form data
      this.toastService.success('Your message has been received loud and clear. Cheers!');
    }
    else {
      this.toastService.error('Please fill in all required fields!');
    }
    return false; // Prevent page refresh
  }



}
